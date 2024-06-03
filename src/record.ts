import { Router } from "express";
import { authMiddleware, parseJwtToId } from "./auth";
import { STATE } from "./app";
import Record from "./model/record";
import { Op } from "sequelize";
import Vote from "./model/vote";
import Option from "./model/option";
import Image from "./model/image";

export const record = Router();

function getState(start: Date, end: Date){
    let s = Date.parse(start.toString());
    let e = Date.parse(end.toString());
    let n = Date.now();
    return s > n ? STATE.NOTSTART : e < n ? STATE.END : STATE.ING;
}
async function findUserRecord(user: string){
    let records = await Record.findAll({where: {user: user, creator: {[Op.ne]: user}}});
    let votes = await Vote.findAll({where: {user: user}});

    let voteIds: string[] = [];
    for(let record of records){
        !voteIds.includes(record.vote) && voteIds.push(record.vote);
    }

    for(let vote of votes){
        !voteIds.includes(vote.id) && voteIds.push(vote.id);
    }
    
    let result: {
        id: string, title: string, description: string, state: STATE, number: number,
        items: {src: string, name: string, value: number}[],
        start: Date, end: Date, self: boolean,
    }[] = [];

    for(let vote of voteIds){
        let vote_data = (await Vote.findByPk(vote))!;
        let {count} = await Record.findAndCountAll({where: {vote: vote_data.id}});
        let options = await Option.findAll({where: {vote: vote_data.id, user: vote_data.user}});
        
        let items: {src: string, name: string, value: number}[] = [];
        for(let option of options){
            let image = (await Image.findByPk(option.image))!;
            let {count: value} = await Record.findAndCountAll({where: {option: option.id, creator: option.user, vote: option.vote}});
            items.push({src: `/image/${image.user}/${image.id}`, name: option.name, value: value})
        }
        result.push({
            id: vote_data.id,
            title: vote_data.title,
            description: vote_data.description,
            state: getState(vote_data.start, vote_data.end),
            number: count,
            items: items,
            start: vote_data.start,
            end: vote_data.end,
            self: vote_data.user === user,
        })
    }

    return result;
}
record.get("/", authMiddleware, async (req, res) => {
    let user = parseJwtToId(req.cookies["token"]);

    let items = await findUserRecord(user);
    res.render("record", {
        signIn: true,
        actions: [{ url: "/create", name: "創建投票" }],
        items: items,
        user: user,
    });
})
import express, { Router } from "express";
import { authMiddleware, parseJwtToId } from "./auth";
import { STATE } from "./app";
import Record from "./model/record";
import { Op } from "sequelize";
import Vote from "./model/vote";
import Option from "./model/option";
import Image from "./model/image";
import sequelize from "./model";
import User from "./model/user";
import { now } from "./utils";

export const record = Router();

function getState(start: Date, end: Date){
    let s = Date.parse(start.toString());
    let e = Date.parse(end.toString()) + 86400 * 1000;
    let n = now();
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
        let {count} = (await Record.findAll(
            {
                attributes: [[sequelize.fn("COUNT", sequelize.fn("DISTINCT", sequelize.col("user"))), "count"]],
                where: {
                    vote: vote_data.id,
                    creator: vote_data.user,
                },
                raw: true,
            }
        ) as any[])[0];
        
        let options = await Option.findAll({where: {vote: vote_data.id, user: vote_data.user}});
        
        let items: {src: string, name: string, value: number}[] = [];
        for(let option of options){
            let image = (await Image.findByPk(option.image));
            let {count: value} = await Record.findAndCountAll({where: {option: option.id, creator: option.user, vote: option.vote}});
            items.push({src: `/image/${image?.user}/${image?.id}`, name: option.name, value: value})
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
    let userItem = await User.findByPk(user);
    res.render("record", {
        signIn: true,
        username: userItem?.name,
        picture: userItem?.picture,
        actions: [{ url: "/create", name: "創建投票" }],
        items: items,
        user: user,
    });
})

record.delete("/delete", authMiddleware, express.json(), async (req, res) => {
    let data = req.body;

    try{
        await Record.destroy({
            where: {
                creator: data.user,
                vote: data.id,
            }
        })

        await Option.destroy({
            where: {
                user: data.user,
                vote: data.id
            }
        })
        await Vote.destroy({
            where: {
                user: data.user,
                id: data.id,
            }
        }) 
    }
    catch(err){
        console.log(err);
        return res.sendStatus(500);
    }

    return res.sendStatus(200);
})
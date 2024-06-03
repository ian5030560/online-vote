import { Router, json } from "express";
import { authMiddleware, parseJwtToId } from "./auth";
import Vote from "./model/vote";
import Option from "./model/option";
import express from "express";
import Record from "./model/record";
import User from "./model/user";
import { formatDate } from "./utils";

function over(end: Date){
    return Date.parse(end.toString()) < Date.now();
}
async function getVoteContent(creator: string, id: string, user?: string){
    const vote = await Vote.findOne({where: {user: creator, id: id}});
    if(!vote) return null;

    const options = await Option.findAll({where: {user: creator, vote: id}});
    const votes = user ? await Record.findAll({where: {user: user, vote: id}}) : [];
    let content = {
        title: vote.title,
        description: vote.description,
        start: formatDate(vote.start),
        end: formatDate(vote.end),
        enabled: !over(vote.end) ? vote.limit - votes.length : 0,
        number: 0,
        items: [] as {id: string, src: string, name: string, content: string, value: number, isVoted: boolean}[],
    }
    for(let option of options){
        let records = await Record.findAll({where: {creator: creator, vote: option.vote , option: option.id}});

        content.items.push({
            id: option.id,
            src: `/image/${creator}/${option.image}`,
            name: option.name,
            content: option.description,
            value: records.length,
            isVoted: records.findIndex(record => record.user === user) !== -1,
        })
        content.number += records.length;
    }

    return content;
}
export const content = Router();
content.get("/:creator/:id", async (req, res) => {
    const {creator, id} = req.params;
    if(!(creator && id)) return res.sendStatus(404);
    
    const token = req.cookies["token"];
    let user: string | undefined;
    let content: any;
  
    user = token ? (await User.findByPk(parseJwtToId(token)))!.id: undefined;
    content = await getVoteContent(creator as string, id as string, user);
    if(!content) return res.sendStatus(404);
    
    return res.render("content", {
        signIn: !(token === undefined || token === null),
        user: user,
        actions: [{ url: "/record", name: "我的紀錄" }, { url: "/create", name: "創建投票" }],
        ...content,
    });
})

content.post("/vote", express.json(), async (req, res) => {
    let id: string;
    try{
        id = parseJwtToId(req.cookies["token"]);
    }
    catch(err){
        return res.sendStatus(403);
    }
    const data = req.body;
    
    let inserted = {
        creator: data.creator,
        user: data.voter,
        vote: data.vote,
        option: data.option,   
    };

    console.log(inserted); 
    try{
        await data.state ? Record.create(inserted): Record.destroy({where: inserted});
    }
    catch(e){
        return res.sendStatus(403);
    }
    
    return res.sendStatus(200);
})
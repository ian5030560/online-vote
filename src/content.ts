import { Router, json } from "express";
import { authMiddleware, parseJwtToId } from "./auth";
import Vote from "./model/vote";
import Option from "./model/option";
import express from "express";
import Record from "./model/record";

async function getVoteContent(creator: string, id: string, user?: string){
    const vote = await Vote.findOne({where: {user: creator, id: id}});
    if(!vote) return null;

    const options = await Option.findAll({where: {user: creator, vote: id}});
    const votes = user ? await Record.findAll({where: {user: user, vote: id}}) : [];
    let content = {
        title: vote.title,
        description: vote.description,
        start: vote.start.toString().split("-").join("/"),
        end: vote.end.toString().split("-").join("/"),
        enabled: vote.limit - votes.length,
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
content.get("/:creator/:id", authMiddleware, async (req, res) => {
    const {creator, id} = req.params;
    if(!(creator && id)) return res.sendStatus(404);
    
    const {user} = req.cookies["token"];

    let content = await getVoteContent(creator as string, id as string, user);
    if(!content) return res.sendStatus(404);

    return res.render("content", {
        signIn: true,
        actions: [{ url: "/record", name: "我的紀錄" }, { url: "/create", name: "創建投票" }],
        ...content,
    });
})

content.post("/vote", express.json(), (req, res) => {
    let id: string;
    try{
        id = parseJwtToId(req.cookies["token"]);
    }
    catch(err){
        return res.sendStatus(403);
    }
    const data = req.body;
    console.log(data);
    return res.sendStatus(200);
})
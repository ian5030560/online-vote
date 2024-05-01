import express, { Request, Response, Router } from "express";
import { authMiddleware, parseJwtToId } from "./auth";
import Vote from "./model/vote";
import { randomId } from "./utils";

const create = Router();

function handleCreate(req: Request, res: Response){
    let success = false;
    if(req.method === "POST"){
        let formData = req.body;
        let id = parseJwtToId(req.cookies["token"]);
        let optionNames = formData["option-names"];
        let optionImages = formData["option-images"];
        let optionDescripts = formData["option-descripts"];

        try{
            Vote.create({
                title: formData.problem,
                description: formData.descript,
                number: formData.ticket === "single" ? 1: parseInt(formData["ticket-number"] as string),
                id: randomId(),
                start: new Date(formData.start as string),
                end: new Date(formData.end as string),
                user: id,
            });

            console.log(formData);
            success = true;
        }
        catch(err){}
    }
    
    return res.render("create", {
        dark: false,
        signIn: true,
        actions: [{ url: "/record", name: "我的紀錄" }],
        success: success,
    });
}
create.get("/", authMiddleware, handleCreate);
create.post("/", express.urlencoded({extended: true}), handleCreate);

export default create;
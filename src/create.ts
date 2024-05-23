import express, { Request, Response, Router, Express } from "express";
import { authMiddleware, parseJwtToId } from "./auth";
import Vote from "./model/vote";
import { randomId } from "./utils";
import multer from "multer";
import Image, { hasIdenticalImage } from "./model/image";
import { createHash } from "crypto";
import Option from "./model/option";

const create = Router();
let upload = multer({ storage: multer.memoryStorage() });

function handleOption(userId: string, voteId: string, imageIds: string[], data: any) {
    let optionsImageNames = Array.isArray(data["option-image-names"]) ? data["option-image-names"] : [data["option-image-names"]];
    let optionNames = Array.isArray(data["option-names"]) ? data["option-names"] : [data["option-names"]];
    let optionDescripts = Array.isArray(data["option-descripts"]) ? data["option-descripts"] : [data["option-descripts"]];

    let j = 0;
    for (let i = 0; i < optionNames.length; i++) {

        let img = optionsImageNames[i] ? imageIds[j] : undefined;

        Option.create({
            user: userId,
            vote: voteId,
            name: optionNames[i],
            description: optionDescripts[i],
            image: img,
            id: randomId(),
        });
 
        j++;
    }
}

async function handleImage(userId: string, images: Express.Multer.File[]) {
    let ids = [];
    for (let image of images) {
        let content = image.buffer;
        let info = JSON.stringify(content);
        const md5 = createHash("md5");
        let id = md5.update(info).digest("hex");

        let result = await hasIdenticalImage(id);
        if(!result){
            await Image.create({
                user: userId,
                id: id,
                content: content,
                filename: image.originalname,
                mime: image.mimetype,
            })
        }

        ids.push(id);
    }

    return ids;
}
function handleVote(formData: any, id: string) {
    let vote = randomId();
    Vote.create({
        title: formData.problem,
        description: formData.descript,
        limit: formData.ticket === "single" ? 1 : parseInt(formData["ticket-number"] as string),
        id: vote,
        start: new Date(formData.start as string),
        end: new Date(formData.end as string),
        user: id,
    });

    return vote;
}
async function handleCreate(req: Request, res: Response) {
    let success = false;
    if (req.method === "POST") {
        let formData = req.body;
        let id = parseJwtToId(req.cookies["token"]);

        let vote = handleVote(formData, id);
        let imageIds: string[] = [];
        if (Array.isArray(req.files)) {
            imageIds = await handleImage(id, req.files);
        }

        handleOption(id, vote, imageIds, formData);
        success = true;
    }

    return res.render("create", {
        signIn: true,
        actions: [{ url: "/record", name: "我的紀錄" }],
        success: success,
    });
}
create.get("/", authMiddleware, handleCreate);
create.post("/", upload.array("option-images"), handleCreate);

export default create;
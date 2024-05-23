import { config } from "dotenv";
config();
import express from "express";
import engine from "ejs-locals";
import auth, { authMiddleware, isSignIn, parseJwtToId } from "./auth";
import cors from "cors";
import cookieParser from "cookie-parser";
import { initDB } from "./model";
import create from "./create";
import { getImageById } from "./model/image";
import { getOptionsInVote } from "./model/option";
import Vote, { VoteModal } from "./model/vote";
import { InferAttributes, Op, WhereOptions } from "sequelize";
import { content } from "./content";
import Record from "./model/record";

let app = express();

app.engine("ejs", engine);
app.set("views", "templates");
app.set("view engine", "ejs");

app.use(express.static("node_modules"));
app.use(express.static("static"));
app.use(cookieParser());
app.use("/auth", auth);
app.use("/create", create);
app.use("/content", content);
app.use(cors());

enum STATE {
    NOTSTART = "未開始",
    ING = "進行中",
    END = "已結束",
}
async function getAllVoteAtHome(state?: STATE) {
    let condition: WhereOptions<InferAttributes<VoteModal, { omit: never }>>;

    switch (state) {
        case STATE.NOTSTART:
            condition = {
                start: { [Op.gt]: new Date() }
            }
            break;
        case STATE.END:
            condition = {
                end: { [Op.lt]: new Date() }
            }
            break;
        case STATE.ING:
            condition = {
                start: { [Op.gte]: new Date() },
                end: { [Op.lte]: new Date() }
            }
            break;
        default:
            throw new Error("Invalid state");
    }

    let items = await Vote.findAll({ where: condition });
    let mappedItems: any[] = [];

    for (let item of items) {
        let options = await getOptionsInVote(item.user, item.id);

        let numbers: number[] = [];
        for (let option of options) {
            let record = await Record.findAll({ where: { user: option.user, option: option.id } });
            numbers.push(record.length);
        }

        mappedItems.push({
            user: item.user,
            id: item.id,
            title: item.title,
            decription: item.description,
            start: item.start,
            end: item.end,
            options: options.map((option, index) => ({
                name: option.name,
                description: option.description,
                number: numbers[index],
                image: option.image,
            })),
            number: numbers.reduce((prev, curr) => prev + curr, 0)
        });
    }

    return mappedItems;
}

function formatDate(data: Date): string {
    return data.toString().split("-").join("/")
}
app.get('/', async (req, res) => {
    let signIn: boolean | undefined;

    try {
        signIn = await isSignIn(req, res);
    }
    catch (err) {
        return res.sendStatus(401);
    }

    let items: any[];
    try {
        if (!req.query.state) return res.redirect("/?state=進行中");
        items = await getAllVoteAtHome(req.query.state as STATE | undefined);
    }
    catch (err) {
        return res.sendStatus(404);
    }
    return res.render("home", {
        signIn: signIn,
        actions: [{ url: "record", name: "我的紀錄" }, { url: "create", name: "創建投票" }],
        cols: ["主題", "敘述", "日期", "人數", ""],
        items: items.map((it) => ({
            data: [it.title, it.decription, `${formatDate(it.start)}~${formatDate(it.end)}`, `${it.number}人`],
            number: it.number,
            options: it.options.map((option: any) => ({
                src: `image/${it.user}/${option.image}`,
                name: option.name,
                value: option.number,
            })),
            url: `content/${it.user}/${it.id}`
        })),
        state: req.query.state
    })
})

app.get("/record", authMiddleware, (req, res) => {
    res.render("record", {
        signIn: true,
        actions: [{ url: "create", name: "創建投票" }],
        items: [
            {
                title: "Example1",
                description: "something...",
                state: STATE.ING,
                number: 50,
                items: [
                    {
                        src: "/assets/437570580_1470748313790701_4345547566074917697_n.jpg",
                        name: "example1",
                        value: 31,
                    }
                ],
                start: "2024/04/01",
                end: "2024/04/01",
                self: false,
            },
            {
                title: "Example2",
                description: "something...",
                state: STATE.END,
                number: 50,
                items: [
                    {
                        src: "/assets/437570580_1470748313790701_4345547566074917697_n.jpg",
                        name: "example1",
                        value: 10,
                    }
                ],
                start: "2024/04/01",
                end: "2024/04/01",
                self: true,
            }
        ]
    });
})


app.get("/image/:user/:id", async (req, res) => {
    let user = req.params.user;
    let id = req.params.id;
    let image = await getImageById(user, id);
    if (!image) return res.send("Images Not found");

    res.contentType(image.mime);
    res.strictContentLength = true;

    return res.send(image.content);
});

app.listen(4000, function () {
    initDB();
    console.log('Example app listening on port 4000!');
})
import { config } from "dotenv";
config();
import express, {Request} from "express";
import engine from "ejs-locals";
import { isSignIn, auth, parseJwtToId } from "./auth";
import cors from "cors";
import cookieParser from "cookie-parser";
import sequelize, { initDB } from "./model";
import create from "./create";
import { getImageById } from "./model/image";
import { getOptionsInVote } from "./model/option";
import Vote, { VoteModal } from "./model/vote";
import { InferAttributes, Op, WhereOptions } from "sequelize";
import { content } from "./content";
import Record from "./model/record";
import { formatDate } from "./utils";
import { record } from "./record";
import User from "./model/user";

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
app.use("/record", record);
app.use(cors());
app.use((req, res, next) => {
    console.log(req.url, req.method, res.statusCode);
    next();
})

export enum STATE {
    NOTSTART = "未開始",
    ING = "進行中",
    END = "已結束",
}

async function getAllVoteAtHome(state?: STATE) {
    let condition: WhereOptions<InferAttributes<VoteModal, { omit: never }>>;
    let cmap = {
        [STATE.NOTSTART]: {start: { [Op.gt]: new Date() }},
        [STATE.END]: {end: { [Op.lt]: new Date() }},
        [STATE.ING]: {
            start: { [Op.lte]: new Date() },
            end: { [Op.gte]: new Date() }
        },
    }
    
    condition = state ? cmap[state] : cmap[STATE.NOTSTART];

    let items = await Vote.findAll({ where: condition });
    let mapped: any[] = [];

    for (let item of items) {
        let options = await getOptionsInVote(item.user, item.id);

        let numbers: number[] = [];
        for (let option of options) {
            let record: any[] = await Record.findAll(
                {
                    attributes: [[sequelize.fn("count", 1), "count"]],
                    where: { creator: option.user, option: option.id, vote: item.id },
                    group: "user",
                    raw: true,
                }
            );
            numbers.push(record[0] ? record[0].count : 0);
        }

        let people = (await Record.findAll(
            {
                attributes: [[sequelize.fn("COUNT", sequelize.fn("DISTINCT", sequelize.col("user"))), "count"]],
                where: {
                    vote: item.id,
                    creator: item.user,
                },
                raw: true,
            }
        ) as any[])[0].count;

        let number = (await Record.findAndCountAll(
            {
                where: {
                    vote: item.id,
                    creator: item.user,
                },
            })
        ).count

        mapped.push({
            user: item.user,
            id: item.id,
            title: item.title,
            start: item.start,
            end: item.end,
            options: options.map((option, index) => ({
                name: option.name,
                number: numbers[index],
                image: option.image,
            })),
            people: people,
            number: number
        });
    }

    return mapped;
}

app.get('/', async (req, res) => {
    let user: string | undefined = undefined;
    let picture: string | undefined = undefined;
    let signIn: boolean | undefined = undefined;
    try {
        signIn = await isSignIn(req, res);
        if(signIn){
            let item = await User.findByPk(parseJwtToId(req.cookies["token"]));
            user = item?.name;
            picture = item?.picture;
        }
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
        username: user,
        picture: picture,
        actions: [{ url: "record", name: "我的紀錄" }, { url: "create", name: "創建投票" }],
        cols: ["主題", "開始", "結束", "人數", ""],
        items: items.map((it) => ({
            data: [it.title, formatDate(it.start), formatDate(it.end), `${it.people}人`],
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


app.get("/image/:user/:id", async (req, res) => {
    let user = req.params.user;
    let id = req.params.id;
    let image = await getImageById(user, id);

    if (!image) return res.sendFile("assets/0EbFCLzPKD.jpg", {root: "static"});

    res.contentType(image.mime);

    return res.send(image.content);
});

app.listen(4000, function () {
    initDB();
    console.log('Example app listening on port 4000!');
})
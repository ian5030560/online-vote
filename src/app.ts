import { config } from "dotenv";
config();
import express from "express";
import engine from "ejs-locals";
import auth, { authMiddleware, isSignIn } from "./auth";
import cors from "cors";
import cookieParser from "cookie-parser";
import { initDB } from "./model";
import create from "./create";

let app = express();

app.engine("ejs", engine);
app.set("views", "templates");
app.set("view engine", "ejs");

app.use(express.static("node_modules"));
app.use(express.static("static"));
app.use(cookieParser());
app.use("/auth", auth);
app.use("/create", create);
app.use(cors());

app.get('/', async (req, res) => {
    let signIn: boolean | undefined;

    try {
        signIn = await isSignIn(req, res);
    } 
    catch (err) {
        return res.sendStatus(401);
    }
    return res.render("home", {
        dark: false,
        signIn: signIn,
        actions: [{ url: "record", name: "我的紀錄" }, { url: "create", name: "創建投票" }],
        cols: ["主題", "敘述", "日期", "人數"],
        items: [
            {
                data: ["example", "description", "2024/12/05 ~ 2024/12/06", "40人"],
                number: 40,
                options: [{
                    src: "/assets/437570580_1470748313790701_4345547566074917697_n.jpg",
                    name: "example1",
                    value: 31,
                }],
                url: "content/example1"
            },
            {
                data: ["example", "description", "2024/12/05 ~ 2024/12/06", "50人"],
                number: 50,
                options: [{
                    src: "/assets/437570580_1470748313790701_4345547566074917697_n.jpg",
                    name: "example1",
                    value: 31,
                }],
                url: "content/example2"
            },
        ]
    });
})

enum STATE {
    NOTSTART = "未開始",
    ING = "進行中",
    END = "已結束",
}
app.get("/record", authMiddleware, (req, res) => {
    res.render("record", {
        dark: false,
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

app.get("/content/:id", authMiddleware, (req, res) => {
    res.render("content", {
        dark: false,
        signIn: true,
        actions: [{ url: "/record", name: "我的紀錄" }, { url: "/create", name: "創建投票" }],
        title: "Exmaple",
        description: "something...",
        start: "2024/05/01",
        end: "2024/06/01",
        enabled: 1,
        items: [
            {
                src: "/assets/437570580_1470748313790701_4345547566074917697_n.jpg",
                name: "選項一",
                content: "選項一的敘述..."
            },
            {
                src: "/assets/437570580_1470748313790701_4345547566074917697_n.jpg",
                name: "選項一",
                content: "選項一的敘述..."
            },
            {
                src: "/assets/437570580_1470748313790701_4345547566074917697_n.jpg",
                name: "選項一",
                content: "選項一的敘述..."
            }
        ]
    });
})


app.listen(4000, function () {
    initDB();
    console.log('Example app listening on port 4000!');
})
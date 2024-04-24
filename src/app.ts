import express from "express";
import engine from "ejs-locals";

let app = express();

app.engine("ejs", engine);
app.set("views", "templates");
app.set("view engine", "ejs");
app.use(express.static("node_modules"));
app.use(express.static("static"));
app.use(express.json());

app.get('/', (req, res) => {
    res.render("home", {
        signIn: true,
        actions: [{ url: "record", name: "我的紀錄" }, { url: "create", name: "創建投票" }, { url: "", name: "登出" }],
        cols: ["主題", "敘述", "日期", "人數"],
        items: [
            ["example", "description", "2024/12/05 ~ 2024/12/06", "12人"],
            ["example", "description", "2024/12/05 ~ 2024/12/06", "12人"],
        ]
    });
})

app.get("/create", (req, res) => {
    res.render("create", {
        signIn: true,
        actions: [{ url: "record", name: "我的紀錄" }, { url: "", name: "登出" }],
    });
})

app.post("/auth/google", (req, res) => {
    console.log(req.body);
    res.send('Hello');
})

enum STATE{
    NOTSTART = "未開始",
    ING = "進行中",
    END = "已結束",
}
app.get("/record", (req, res) => {
    res.render("record", {
        signIn: true,
        actions: [{ url: "create", name: "創建投票" }, { url: "", name: "登出" }],
        items: [
            {
                title: "Example1",
                description: "something...",
                state: STATE.ING,
                number: 50,
                items: [
                    {
                        src: "assets/437570580_1470748313790701_4345547566074917697_n.jpg",
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
                        src: "assets/437570580_1470748313790701_4345547566074917697_n.jpg",
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

app.listen(4000, function () {
    console.log('Example app listening on port 4000!')
})
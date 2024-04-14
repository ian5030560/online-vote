import express from "express";
import render from "./render";

let app = express();

app.use(express.static("node_modules"));
app.use(express.static("static"));

app.get('/',(req, res) => {
    res.sendFile(render("home.html"));
})

app.get("/create", (req, res) => {
    res.sendFile(render("create.html"));
})

app.listen(4000, function () {
    console.log('Example app listening on port 4000!')
})
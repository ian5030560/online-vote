import { Router } from "express";
import { jwtDecode } from "jwt-decode";
import express from "express";

let auth = Router();

auth.post("/google", express.text({ type: "*/*" }), async (req, res) => {
    let jwt = req.body;
    console.log()
    res.setHeader("authorization", "Bearer " + jwt);
    res.redirect("/");
})

export default auth;
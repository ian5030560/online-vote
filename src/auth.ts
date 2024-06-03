import { Router, Request, Response, NextFunction } from "express";
import { google } from "googleapis";
import { OAuth2Client } from "googleapis-common";
import { env } from "process";
import User from "./model/user";
import jwt, { JwtPayload, TokenExpiredError } from "jsonwebtoken";

export const auth = Router();

function getAuthClient() {
    return new google.auth.OAuth2(
        env.CLIENT_ID,
        env.CLIENT_SECRET,
        env.REDIRECT_URL,
    )
}

function getAuthUrl(client: OAuth2Client) {

    return client.generateAuthUrl({
        access_type: "offline", prompt: "consent",
        scope: [
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/userinfo.email"
        ],
    })
}

auth.get("/", (req, res) => {
    return res.redirect(getAuthUrl(getAuthClient()));
});

auth.get("/google", async (req, res) => {
    let code = req.query as unknown as string;
    let client = getAuthClient();
    let { tokens } = await client.getToken(code);
    if (!tokens.id_token) return res.sendStatus(401);

    let decoded = jwt.decode(tokens.id_token, { json: true });
    if (!decoded) return res.sendStatus(401);

    const { sub, name, email, picture } = decoded;
    const data = await User.findByPk(sub);
    const token = jwt.sign({ id: sub }, env.JWT_SECRET!, { expiresIn: env.EXPIRE_TIME });

    if (data) {
        let older = data.get();
        let updated: any = { token: token };
        if (older.name !== name) updated.name = name;
        if (older.picture !== picture) updated.picture = picture;

        await data.update(updated);
    }
    else {
        User.create({
            id: sub!,
            email: email,
            name: name,
            picture: picture,
        })
    }
    res.cookie("token", token, { httpOnly: true });
    return res.redirect("/");
})

auth.get("/signout", (req, res) => {
    res.clearCookie("token");
    return res.redirect("/");
});

export async function isSignIn(req: Request, res: Response): Promise<boolean> {
    let token = req.cookies["token"];
    if (!token) return false;
    
    try{
        let verified = jwt.verify(token, env.JWT_SECRET!);
        if (typeof verified === "string") {
            verified = JSON.parse(verified) as JwtPayload;
        }
    
        const { id } = verified as JwtPayload;
        if (!id) return false;
    
        let item = await User.findByPk(id);
        if (!item) return false;
        
    }
    catch(err){
        if(!(err instanceof TokenExpiredError)) throw new Error((err as Error).message);
        return false;
    }
    return true;
}
export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
    try{
        if(!isSignIn(req, res)){
            res.clearCookie("token");
            return res.redirect("/?state=進行中");
        }
    }
    catch(err){
        return res.sendStatus(401);
    }

    return next();
}


export function parseJwtToId(token: any){
    let decoded: JwtPayload;
    try{
        decoded = jwt.verify(token, env.JWT_SECRET!) as JwtPayload;
    }
    catch(err){
        throw err;
    }

    return decoded.id;
}
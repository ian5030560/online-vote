import { randomBytes, createHash } from "crypto";

export function randomId() {
    return randomBytes(64).toString("hex");
}

export function md5Hash(val: string): string{
    return createHash("md5").update(val).digest("hex");
}

export function formatDate(data: Date): string {
    return data.toString().split("-").join("/")
}

export function now(){
    let offset = new Date().getTimezoneOffset();
    return Date.now() - offset * 60 * 1000;
}
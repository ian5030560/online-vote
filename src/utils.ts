import { randomBytes, createHash } from "crypto";

export function randomId() {
    return randomBytes(64).toString("hex");
}

export function md5Hash(val: string): string{
    return createHash("md5").update(val).digest("hex");
}
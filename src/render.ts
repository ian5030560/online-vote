import { resolve } from "path";

const TEMPLATES = "templates";
export default function render(htmlFile: string) {
    return resolve(TEMPLATES, htmlFile);
}
import { ThemeButton } from "../ui";
import create, { radioListener } from "../utils";
import Table from "./table";

let resultArea = document.getElementById("result-area");

window.onload = () => {
    let table = Table({
        columns: ["主題", "敘述", "圖片", "日期", "人數"],
        items: [
            ["example", "description", "", "2024/12/05 ~ 2024/12/06", "12人"],
            ["example", "description", "", "2024/12/05 ~ 2024/12/06", "12人"],
        ].map(item => {
            return item.map((it, index) => {
                if(index === 2){
                    let img = create("img", {attributes: {src: it, alt: ""}});
                    return img
                }
                else{
                    let div = create("div");
                    div.innerText = it;
                    return div;
                }
            })
        })
    });

    resultArea?.appendChild(table);

    radioListener("format", ["table", "card"], (e) => {
        let value = (e.target as HTMLInputElement).value;
        if(value !== "table"){
            table.classList.add("card-table");
        }
        else{
            table.classList.remove("card-table");
        }
    })

    let theme = ThemeButton({mode: "light"});
    theme[0].classList.add("m-5 p-2");
    document.body.appendChild(theme[0] as Node);
}

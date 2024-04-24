import { ThemeButton } from "../ui";
import { radioListener } from "../utils";

let table = document.getElementById("result");

window.onload = () => {

    radioListener("format", ["table", "card"], (e) => {
        let value = (e.target as HTMLInputElement).value;
        if(value !== "table"){
            table!.classList.add("card-table");
        }
        else{
            table!.classList.remove("card-table");
        }
    })

    let theme = ThemeButton({mode: "light"});
    theme[0].classList.add("m-5");
    document.body.appendChild(theme[0] as Node);
}

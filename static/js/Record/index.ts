import { ThemeButton } from "../ui";
import { add } from "../utils";
import BoxItem, { STATE } from "./item";

let box = document.getElementById("box");
let search = document.getElementById("search");

window.onload = () => {
    let theme = ThemeButton({ mode: "light" });
    theme[0].classList.add("m-5");
    document.body.appendChild(theme[0] as Node);
    let dataset = [
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
    add(box!, dataset.map(data => BoxItem(data)));
    search?.addEventListener("input", (e) => {
        let val = (e.target as HTMLInputElement).value;
   
        for(let boxitem of box!.children){
            let h2 = boxitem.querySelector("h2");
            if(!h2?.innerText.toLowerCase().includes(val.toLowerCase())){
                (boxitem as HTMLElement).style.display = "none";
            }
            else{
                (boxitem as HTMLElement).style.display = "block";
            }
        }
    });
}
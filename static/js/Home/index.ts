import { ThemeButton } from "../ui";

window.onload = () => {

    let buttons = document.getElementsByClassName("goto");
    for(let button of buttons){
        (button as HTMLElement).addEventListener("click", (e) => {
            window.location.href = button.getAttribute("data-href")!;
        })
    }
    let theme = ThemeButton({mode: "light"});
    theme[0].classList.add("m-5");
    document.body.appendChild(theme[0] as Node);
}

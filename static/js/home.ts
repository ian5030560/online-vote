import loadSwitch from "./utils/switch";

window.onload = () => {

    let buttons = document.getElementsByClassName("goto");
    for(let button of buttons){
        (button as HTMLElement).addEventListener("click", (e) => {
            window.location.href = button.getAttribute("data-href")!;
        })
    }

    loadSwitch();
}
import { ThemeButton } from "../ui";

window.onload = () => {
    let theme = ThemeButton({mode: "light"});
    theme[0].classList.add("m-5 p-2");
    document.body.appendChild(theme[0] as Node);
}
import create, { add, createNS } from "./utils";

type Mode = "light" | "dark";
export function ThemeButton({ mode }: { mode: Mode }): [HTMLDivElement, (mode: Mode) => void] {
    let button = create("div", {
        className: [
            "btn", "btn-dark", "position-fixed", "bottom-0", "end-0", "rounded-3",
        ].join(" "),
    })

    let sunIcon = create("i", {className: "bi bi-brightness-high-fill", id: "theme-icon"});
    let moonIcon = create("i", {className: "bi bi-moon-fill", id: "theme-icon"});

    function setMode(mode: Mode) {
        button.removeChild(document.getElementById("theme-icon")!);
        add(button, mode === "light" ? sunIcon : moonIcon);
        document.documentElement.setAttribute("data-bs-theme", mode === "light" ? "light" : "dark");
        button.classList.remove("btn-dark");
        button.classList.remove("btn-light");
        button.classList.add(mode !== "light" ? "btn-light" : "btn-dark");
    }

    button.addEventListener("click", () => {
        let theme = document.documentElement.getAttribute("data-bs-theme");
        setMode(!theme || theme === "light" ? "dark" : "light");
    });

    return [add(button, mode === "light" ? sunIcon : moonIcon), setMode];
}
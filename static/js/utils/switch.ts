export default function loadSwitch(){
    let switchBtn = document.getElementById("switch");
    let switchIcon = document.getElementById("switch-icon");
    let dark = switchBtn?.getAttribute("data-switch-dark");
    document.documentElement.setAttribute("data-bs-theme", dark === "false" ? "light" : "dark");

    switchBtn?.addEventListener("click", () => {
        let darken = switchBtn?.getAttribute("data-switch-dark");
        document.documentElement.setAttribute("data-bs-theme", darken === "false" ? "dark" : "light");
        switchBtn?.setAttribute("data-switch-dark", new Boolean(darken === "false").toString());
        switchBtn?.classList.toggle("btn-light");
        switchBtn?.classList.toggle("btn-dark");
        switchIcon?.classList.toggle("bi-brightness-high-fill");
        switchIcon?.classList.toggle("bi-moon-fill");
    });
}
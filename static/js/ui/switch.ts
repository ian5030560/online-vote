import { Component, html } from "../utils/framewrok";
import $ from "jquery";

function switchButton(dark: boolean, onSwtich?: (val: boolean) => void): Component {
    return {
        dom: (dom) => {
          
            let div = $(dom).find("div");
            let i = $(dom).find("i");
            let html = document.documentElement;
      
            div.on("click", () => {
                let value = html.getAttribute("data-bs-theme");
                let bool = value === "light" ? false : true;
                onSwtich?.(!bool);
                i.toggleClass("bi-brightness-high-fill").toggleClass("bi-moon-fill");
                div.toggleClass("btn-light").toggleClass("btn-dark");
                html.setAttribute("data-bs-theme", !bool ? "dark" : "light");
            });

            html.setAttribute("data-bs-theme", !dark ? "light" : "dark");
        },
        render: `<div class='btn ${dark ? "btn-light" : "btn-dark"} position-fixed bottom-0 end-0 rounded-3 m-5'>
                 <i class='${dark ? "bi bi-brightness-high-fill" : "bi bi-moon-fill"}'></i>
             </div>`
    }
}
export default function switchTheme() {
    let dark = localStorage.getItem("theme-dark");
    let darkBool = dark ? dark === "true" ? true : false : false;
    let button = html(switchButton(darkBool, (value) => {
        localStorage.setItem("theme-dark", value ? "true" : "false");
    }));
    document.body.appendChild(button);
}
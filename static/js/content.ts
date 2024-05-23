import switchTheme from "./ui/switch"

let options = document.querySelectorAll("[data-option-id]");
let enableLabel = document.getElementById("enable");

window.onload = () => {
    for(let option of options) {
        let button = option.querySelector(".btn");
        button?.addEventListener("click", () => {
            let num = parseInt(enableLabel!.getAttribute("data-limit-number") as string);
            let val = button.getAttribute("data-is-voted") === "true";
            if(num === 0 && !val) return;

            button.setAttribute("data-is-voted", !val ? "true" : "false");
            button.classList.toggle("btn-outline-primary");
            button.classList.toggle("btn-primary");

            let result = val ? num + 1 : num - 1;
            enableLabel!.setAttribute("data-limit-number", result + "");
            enableLabel!.innerText = `目前可投${result}人`;
            
            let progress = option.querySelector(".progress")!;
            let nowValue = parseInt(progress.getAttribute("aria-valuenow") as string);
            progress.setAttribute("aria-valuenow", result + "");
        })
    }
    switchTheme();
}

window.onbeforeunload = () => {
    fetch("/content/vote", 
    {
        body: JSON.stringify({
            text: "vote",
        }),
        method: "POST",
        headers: {
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
            "content-type": "application/json"
        }
    })
}
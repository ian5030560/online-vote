import switchTheme from "./ui/switch"
import { Toast } from "bootstrap";

let options = document.querySelectorAll("[data-option-id]");
let enableLabel = document.getElementById("enable");
let success = new Toast(document.getElementById("success")!);
let fail = new Toast(document.getElementById("fail")!);

interface VoteDetail {
    id: string;
    voted: boolean;
}
window.onload = () => {
    for (let option of options) {
        let button = option.querySelector(".btn");
        button?.addEventListener("click", () => {
            let num = parseInt(enableLabel!.getAttribute("data-limit-number") as string);
            let val = button.getAttribute("data-is-voted") === "true";
            if (num === 0 && !val) return;

            button.setAttribute("data-is-voted", !val ? "true" : "false");
            button.classList.toggle("btn-outline-primary");
            button.classList.toggle("btn-primary");

            let voteEvent = new CustomEvent<VoteDetail>("vote",
                {
                    detail: {
                        id: option.getAttribute("data-option-id")!,
                        voted: !val
                    }
                }
            )
            button.dispatchEvent(voteEvent);

            let result = val ? num + 1 : num - 1;
            enableLabel!.setAttribute("data-limit-number", result + "");
            enableLabel!.innerText = `目前可投${result}人`;

            let progress = option.querySelector(".progress")!;
            let nowValue = parseInt(progress.getAttribute("aria-valuenow") as string);
            let newNowValue = val ? nowValue - 1 : nowValue + 1;
            progress.setAttribute("aria-valuenow", newNowValue + "");
            let maxValue = parseInt(progress.getAttribute("aria-valuemax") as string);
            let newMaxValue = val ? maxValue - 1 : maxValue + 1;
            progress.setAttribute("aria-valuemax", `${newMaxValue}`);

            let bar = progress.firstElementChild as HTMLElement;
            let per = newNowValue / newMaxValue;
            bar.style.width = `${isNaN(per) ? 0 : per * 100}%`;
            (bar.nextElementSibling as HTMLElement).innerText = `${newNowValue}人`;
        })

        button?.addEventListener("vote", (e) => {
            let {id, voted} = (e as CustomEvent<VoteDetail>).detail;
            let [vote, creator,] = window.location.pathname.split("/").reverse();
            let voter = document.getElementById("token")?.getAttribute("data-user-token");
           
            fetch("/content/vote",
                {
                    body: JSON.stringify({
                        creator: creator,
                        voter: voter,
                        vote: vote,
                        option: id,
                        state: voted,
                    }),
                    method: "post",
                    headers: {
                        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
                        "content-type": "application/json"
                    },
                }
            )
            .then(res => {
                if(res.status === 200){
                    success.show();
                }
                else{
                    fail.show();
                }
            })
            .catch(() => fail.show())
        });
    }
    switchTheme();
}
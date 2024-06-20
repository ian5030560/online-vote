import switchTheme from "./ui/switch"
import { Toast } from "bootstrap";
import $ from "jquery";

let options = document.querySelectorAll("[data-option-id]")!;
let enableLabel = document.getElementById("enable")!;
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
            let num = parseInt($(enableLabel).attr("data-limit-number") as string);
            let val = $(button).attr("data-is-voted") === "true";
            if (num === 0 && !val) return;
   
            $(button).attr("data-is-voted", !val ? "true" : "false")
                .toggleClass("btn-outline-primary")
                .toggleClass("btn-primary");

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
            $(enableLabel).attr("data-limit-number", result + "")
                .text(`目前可投${result}人`);


            $("[data-option-id]")
                .find(".progress")
                .each((_, element) => {
                    let eq = $(element);
                    let nowVal = parseInt(eq.attr("aria-valuenow")!);
                    let target = $(option).find(".progress").get(0) === eq.get(0);
                    let newNowVal = target ? val ? nowVal - 1 : nowVal + 1 : nowVal;
                    eq.attr("aria-valuenow", newNowVal);

                    let maxVal = parseInt(eq.attr("aria-valuemax")!);
                    let newMaxVal = val ? maxVal - 1 : maxVal + 1;
                    eq.attr("aria-valuemax", newMaxVal);
                    let per = newNowVal / newMaxVal;
                    
                    eq.find(".progress-bar").css({ width: `${isNaN(per) ? 0 : per * 100}%` })
                        .next().text(`${newNowVal}人`);
                })
        })

        button?.addEventListener("vote", (e) => {
            let { id, voted } = (e as CustomEvent<VoteDetail>).detail;
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
                    if (res.status === 200) {
                        success.show();
                    }
                    else {
                        fail.show();
                    }
                })
                .catch(() => fail.show())
        });
    }
    switchTheme();
}
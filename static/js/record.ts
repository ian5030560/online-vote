import switchTheme from "./ui/switch";
import { Toast, Modal } from "bootstrap";
import { state } from "./utils";
import $ from "jquery";

let box = document.getElementById("box");
let search = document.getElementById("search");
let closeModal = document.getElementById("closeModal");
let success = new Toast("#success");
let fail = new Toast("#fail");
let filter = state<string>("filter");
let dropItems = document.querySelectorAll("#drop-menu>li");

window.onload = () => {

    dropItems.forEach((item) => {
        $(item).on("click", () => {
            filter.value = $(item).text();
            let selected = new CustomEvent("selected", {detail: filter.value});
            item.dispatchEvent(selected);
        }).on("selected", (e) => {
            let val = (e as unknown as CustomEvent<string>).detail;
            $("[data-item-state]").each((_, element) => {
                let state = $(element).attr("data-item-state");
                if(state === val || val === "全部"){
                    $(element).removeClass("d-none");
                }
                else{
                    $(element).addClass("d-none");
                }
            })
        })
    })

    filter.define("display", (element, _, next) => {
        $(element).text(next);
    });

    filter.value = "全部";
    
    search?.addEventListener("input", (e) => {
        let val = (e.target as HTMLInputElement).value;

        for (let boxitem of box!.children) {
            let h2 = boxitem.querySelector("h2");
            if (!h2?.innerText.toLowerCase().includes(val.toLowerCase())) {
                (boxitem as HTMLElement).style.display = "none";
            }
            else {
                (boxitem as HTMLElement).style.display = "block";
            }
        }
    });

    closeModal?.addEventListener("show.bs.modal", (e) => {
        
        let target = (e as Modal.Event).relatedTarget;
        let title = target!.getAttribute("data-bs-title")!;
        let boxId = target!.getAttribute("data-bs-boxId");
        let boxItem = document.getElementById(`${boxId}`)!;

        closeModal.querySelector(".modal-body")!.innerHTML = `是否刪除${title}`;
        let okButton = closeModal.querySelector(".modal-footer [data-bs-value=\"ok\"]");
        okButton?.addEventListener("click", () => {
            fetch("/record/delete",
                {
                    method: "delete",
                    headers: {
                        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({
                        user: $("[data-user-token]").attr("data-user-token"),
                        id: boxId,
                    }),
                }
            )
            .then(res => res.status === 200)
            .then(ok => {
                if(ok){
                    boxItem.remove();
                    success.show();
                }
                else{
                    fail.show();
                }
            })
            .catch(() => fail.show());
            
        }, { once: true });
    })

    switchTheme();
}
import { Modal } from "bootstrap";
import loadSwitch from "./utils/switch";

let box = document.getElementById("box");
let search = document.getElementById("search");
let closeModal = document.getElementById("closeModal");

window.onload = () => {

    search?.addEventListener("input", (e) => {
        let val = (e.target as HTMLInputElement).value;
   
        for(let boxitem of box!.children){
            let h2 = boxitem.querySelector("h2");
            if(!h2?.innerText.toLowerCase().includes(val.toLowerCase())){
                (boxitem as HTMLElement).style.display = "none";
            }
            else{
                (boxitem as HTMLElement).style.display = "block";
            }
        }
    });

    closeModal?.addEventListener("show.bs.modal", (e) => {
        let target = (e as Modal.Event).relatedTarget;
        let title = target!.getAttribute("data-bs-title")!;
        let boxId = target!.getAttribute("data-bs-boxId");
        let boxItem = document.getElementById(`box-${boxId}`);
        closeModal.querySelector(".modal-body")!.innerHTML = `是否刪除${title}`;
        let okButton = closeModal.querySelector(".modal-footer [data-bs-value=\"ok\"]");
        okButton?.addEventListener("click", () => {
            boxItem?.remove();
        }, {once: true});
    })

    loadSwitch();
}
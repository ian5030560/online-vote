 import { Modal } from "bootstrap";
import create, { add, randomId } from "../utils"
interface OptionData {
    src: string;
    name: string;
    value: number;
}

export enum STATE{
    NOTSTART = "未開始",
    ING = "進行中",
    END = "已結束",
}
interface BoxItemPayload {
    title: string;
    description: string;
    items: OptionData[];
    state: STATE;
    start: string;
    end: string;
    self: boolean;
    number: number;
}
export default function BoxItem(payload: BoxItemPayload) {
    let boxItem = create("div", {
        className: "border position-relative p-2 mb-2",
        style: { maxHeight: "500px" }
    });
    let flex = create("div", { className: "d-flex align-items-baseline" });
    let title = create("h2", { className: "me-2" });
    title.innerText = payload.title;

    let targetId = randomId(5);
    let collapseButton = create("button", {
        className: "btn me-2",
        attributes: {
            type: "button",
            "data-bs-toggle": "collapse",
            "data-bs-target": `#${targetId}`,
            "aria-expanded": "false",
            "aria-controls": targetId,
        }
    });
    let collapseIcon = create("i", { className: "bi bi-chevron-down" });
    let info = create("p", { className: "text-secondary-emphasis" });
    info.innerText = `狀態: ${payload.state}, 投票人數: ${payload.number}人\n日期: ${payload.start}~${payload.end}`;

    let closeButton = create("div", {
        className: "btn btn-outline-danger position-absolute top-0 end-0 m-2",
        attributes: {
            role: "button",
            "data-bs-toggle": "modal",
            "data-bs-target": "#closeModal",
            "data-bs-title": payload.title,
        }
    });
    let closeIcon = create("i", { className: "bi bi-x-lg" });

    let descript = create("p", { className: "text-center" });
    descript.innerText = payload.description;

    let optionList = create("ol", { className: "collapse", id: targetId });

    let closeModal = document.getElementById("closeModal");

    closeModal?.addEventListener("show.bs.modal", (e) => {
        let target = (e as Modal.Event).relatedTarget;
        let title = target!.getAttribute("data-bs-title")!;
        closeModal.querySelector(".modal-body")!.innerHTML = `是否刪除${title}`;
        let okButton = closeModal.querySelector(".modal-footer [data-bs-value=\"ok\"]");
        okButton?.addEventListener("click", () => {
            if(target === closeButton){
                boxItem.remove();
            }
        }, {once: true});
    })

    if (payload.self) {
        flex = add(flex, add(closeButton, closeIcon));
    }
    else {
        add(closeButton, closeIcon).remove();
    }
    return add(boxItem, [
        add(flex, [
            title,
            add(collapseButton, collapseIcon),
            info,
        ]),
        descript,
        add(optionList, payload.items.map(item => OptionItem({max: payload.number, min: 0, ...item}))),
    ])
}

type OptionItemPayload = OptionData & {max: number, min: number};
function OptionItem(payload: OptionItemPayload) {
    let optionItem = create("li");
    let div = create("div", { className: "container-fluid" });
    let row = create("div", { className: "row align-items-center" });
    let col3 = create("div", { className: "col-3" });
    let div1 = create("div", { className: "d-flex align-items-center" });
    let span = create("span", { className: "float-start me-3" });
    let img = create("img", {
        className: "",
        attributes: { src: payload.src, alt: "沒有圖片", width: "100" },
    });
    let optionName = create("span", { className: "fw-bold text-body-secondary text-break w-100 text-center" });
    optionName.innerText = payload.name;
    let col9 = create("div", { className: "col-9" });
    let pregress = create("div", {
        className: "progress",
        attributes: {
            role: "progressbar",
            "aria-label": "progress-label",
            "aria-valuenow": payload.value + "",
            "aria-valuemin": "0",
            "aria-valuemax": "100",
        },
        style: { height: "50px" }
    });
    let bar = create("div", {
        className: `progress-bar`,
        style: {
            height: "50px",
            width: `${(payload.value - payload.min) / (payload.max - payload.min) * 100}%`
        }
    });
    bar.innerText = `${payload.value}人`;

    return add(optionItem,
        add(div,
            add(row, [
                add(col3,
                    add(div1, [
                        add(span, img),
                        optionName
                    ])
                ),
                add(col9,
                    add(pregress, bar)
                )
            ])
        )
    )
}
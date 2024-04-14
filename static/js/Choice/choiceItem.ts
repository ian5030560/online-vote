import create, { add, createNS } from "../utils";

interface ChoiceItemPayload {
    container: HTMLElement;
}
const ChoiceItem = (payload: ChoiceItemPayload) => {
    let choice = create("li", { className: "mb-3" });
    let div = create("div", { className: "row" });
    let div1 = create("div", { className: "col-2 text-center" });
    let img = create("img", { className: "img-thumbnail", attributes: { alt: "上傳圖片" }, style: { cursor: "pointer" } });
    let file = create("input", { className: "d-none", attributes: { "type": "file", "aria-label": "choice-image" } });
    let div2 = create("div", { className: "col-10 d-flex align-items-center" });
    let descript = create("input", { className: "form-control me-3", attributes: { "aria-label": "choice-descript" } });
    let button = create("div", { className: "btn btn-outline-danger pb-2", attributes: { "type": "button" } });

    let svg = createNS("http://www.w3.org/2000/svg", "svg", {
        className: "bi bi-trash3",
        attributes: {
            width: "16",
            height: "16",
            fill: "currentColor",
            viewBox: "0 0 16 16"
        }
    });

    let path = createNS("http://www.w3.org/2000/svg", "path", {
        attributes: {
            d: "M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"
        }
    });

    img.addEventListener("click", () => file.click());

    file.addEventListener("change", () => {
        let files = file.files;
        if (!files) return;
        let url = URL.createObjectURL(files[0]);
        img.src = url;
    });

    button.addEventListener("click", () => payload.container.removeChild(choice));

    return add(choice, add(div, [
        add(div1, [img, file]),
        add(div2, [
            descript,
            add(button, add(svg, path))
        ])
    ]));
}

export default ChoiceItem;
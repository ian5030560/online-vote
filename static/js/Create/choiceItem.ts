import create, { add, randomId } from "../utils";

const ChoiceItem = () => {
    let choice = create("li", { className: "mb-3" });
    let div = create("div", { className: "row align-items-center" });
    let div1 = create("div", { className: "col-2 text-center" });
    let img = create("img", { className: "img-thumbnail", attributes: { alt: "上傳圖片" }, style: { cursor: "pointer" } });
    let div2 = create("div", {className: "col-3"});
    let div3 = create("div", { className: "form-floating" });
    let nameId = randomId(5);
    let name = create("input", { className: "form-control", id: nameId, attributes: {name: "choice-names", placeholder: " "} });
    let namelabel = create("label", { attributes: { for: nameId } });
    namelabel.innerText = "選項名稱";
    let file = create("input", { className: "d-none", attributes: { "type": "file", "aria-label": "choice-image", name: "choice-images" } });
    let div4 = create("div", {className: "col-6"});
    let div5 = create("div", { className: "form-floating" });
    let descriptId = randomId(6);
    let descript = create("textarea", { className: "form-control me-3", id: descriptId, attributes: {name: "choice-descripts", placeholder: " "} });
    let descriptlabel = create("label", { attributes: { for: descriptId } });
    descriptlabel.innerText = "敘述";
    let div6 = create("div", {className: "col-1"});
    let button = create("div", { className: "btn btn-outline-danger pb-2", attributes: { "type": "button" } });
    let icon = create("i", { className: "bi bi-trash3" })

    img.addEventListener("click", () => file.click());

    file.addEventListener("change", () => {
        let files = file.files;
        if (!files) return;
        let url = URL.createObjectURL(files[0]);
        img.src = url;
    });

    button.addEventListener("click", () => choice.remove());

    return add(choice, add(div, [
        add(div1, [img, file]),
        add(div2, add(div3, [name, namelabel])),
        add(div4, add(div5, [descript, descriptlabel])),
        add(div6, add(button, icon))
    ]));
}

export default ChoiceItem;
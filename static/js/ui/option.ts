import { html, randomId, ref } from "../utils";

interface OptionPayload {
    onRemove: () => void;
}

export default function Option(payload: OptionPayload) {

    let img = ref("img");
    let file = ref("input");
    let button = ref("button");
    let option = ref("li");

    img.on("click", () => (file.instance as HTMLInputElement).click());
    file.on("change", () => {
        let files = (file.instance as HTMLInputElement).files;
        if (!files) return;
        let url = URL.createObjectURL(files[0]);
        (img.instance as HTMLImageElement).src = url;
    });

    button.on("click", () => {
        option.instance.remove();
        payload.onRemove();
    });

    let nameId = randomId(5);
    let descriptId = randomId(5);

    return html(img, file, button, option)
    `${option.bind(`<li class='mb-3'>
        <div class='row align-items-center'>
            <div class='col-2 text-center'>
                ${img.bind("<img class='img-thumbnail' alt='上傳圖片' style='cursor: pointer;'/>")}
                ${file.bind("<input type='file' class='d-none' name='option-images' aria-label='option-image'/>")}
            </div>
            <div class='col-3'>
                <div class='form-floating'>
                    <input class='form-control' id='${nameId}' name='option-names' placeholder=' ' require/>
                    <label for='${nameId}'>選項名稱</label>
                </div>
            </div>
            <div class='col-6'>
                <div class='form-floating'>
                    <textarea class='form-control me-3' name='option-descripts' placeholder=' ' id='${descriptId}' required/></textarea>
                    <label for='${descriptId}'>敘述</label>
                </div>  
            </div>
            <div class='col-1'>
                ${button.bind(`<button class='btn btn-outline-danger pb-2' type='button'>
                    <i class='bi bi-trash3'></i>
                </button>`)}
            </div>
        </div>
    </li>`)}`
}
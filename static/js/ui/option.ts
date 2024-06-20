import { Component } from "../utils/framewrok";
import { uuid } from "../utils";
import $ from "jquery";

export default function Option(onRemove: () => void): Component {

    let nameId = uuid();
    let descriptId = uuid();

    return {
        dom: (dom) => {
            let li = $(dom).find("li");
            let file = $(dom).find("input[type='file']");
            let upload = $(dom).find("div.btn");
            let image = $(dom).find("img");
            let button = $(dom).find("button.btn");

            upload.on("click", () => file.trigger("click"));
            image.on("click", () => file.trigger("click"));

            file.on("change", (e) => {
                let files = (e.target as HTMLInputElement).files;
                if (!files) return;

                let url = URL.createObjectURL(files[0]);
                image.attr({ src: url }).removeClass("d-none");
                upload.addClass("d-none");
                file.next().val(files[0].name);
            });

            button.on("click", () => {
                li.remove();
                onRemove();
            })
        },
        render: `<li class='my-3'>
                <div class='hstack gap-3'>
                    <div>
                        <div class='btn btn-outline-primary text-nowrap'><i class="bi bi-upload"></i>上傳圖片</div>
                        <img class='img-thumbnail d-none' alt='' style='cursor: pointer; min-width: 100px;' width='100'/>
                        <input type='file' class='d-none' name='option-images' aria-label='option-image' value='' accept=".jpg, .jpeg, .png"/>
                        <input type='hidden' name='option-image-names' aria-label='option-image-name' value=''/>   
                    </div>
                    <div class='form-floating' style='flex-grow: 1'>
                        <input class='form-control' id='${nameId}' name='option-names' placeholder=' ' require
                            style='min-width: 160px'/>
                        <label for='${nameId}'>選項名稱</label>
                    </div>
                    <div class='form-floating' style='flex-grow: 1'>
                        <textarea class='form-control me-3' name='option-descripts' placeholder=' ' id='${descriptId}' required
                            style='min-width: 360px'/></textarea>
                        <label for='${descriptId}'>敘述</label>
                    </div> 
                    <button class='btn btn-outline-danger pb-2' type='button'>
                        <i class='bi bi-trash3'></i>
                    </button> 
                </div>
            </li>`
    }
}
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
            
            upload.on("click", () => file.trigger("click"))
            
            file.on("change", (e) => {
                let files = (e.target as HTMLInputElement).files;
                if(!files) return;

                let url = URL.createObjectURL(files[0]);
                image.attr({src: url}).removeClass("d-none");
                upload.addClass("d-none");
                file.next().val(files[0].name);
            });

            button.on("click", () => {
                li.remove();
                onRemove();
            })
        },
        render: `<li>
                <div class='container-fluid p-3'>
                    <div class='row align-items-center'>
                    <div class='col-2 text-center'>
                        <div class='btn btn-outline-primary'><i class="bi bi-upload"></i>上傳圖片</div>
                        <img class='img-thumbnail d-none' alt='' style='cursor: pointer;'/>
                        <input type='file' class='d-none' name='option-images' aria-label='option-image' value=''/>
                        <input type='hidden' name='option-image-names' aria-label='option-image-name' value=''/>
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
                        <button class='btn btn-outline-danger pb-2' type='button'>
                            <i class='bi bi-trash3'></i>
                        </button>
                    </div>
                </div>
                </div>
            </li>`
    }
}
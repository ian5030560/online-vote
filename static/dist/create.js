/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./static/js/create.ts":
/*!*****************************!*\
  !*** ./static/js/create.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst switch_1 = __importDefault(__webpack_require__(/*! ./utils/switch */ \"./static/js/utils/switch.ts\"));\nconst utils_1 = __webpack_require__(/*! ./utils */ \"./static/js/utils/index.ts\");\nconst option_1 = __importDefault(__webpack_require__(/*! ./ui/option */ \"./static/js/ui/option.ts\"));\nlet ticketNumberContainer = document.getElementById(\"ticket-number-container\");\nlet optionContainer = document.getElementById(\"option-container\");\nlet optionAdd = document.getElementById(\"option-add\");\nlet voteForm = document.getElementById(\"vote-form\");\nlet optionFrame = optionContainer === null || optionContainer === void 0 ? void 0 : optionContainer.parentElement;\nwindow.onload = () => {\n    (0, utils_1.radioListener)(\"ticket\", [\"single\", \"multiple\"], (e) => {\n        let target = (e.target);\n        let ticketNumber = ticketNumberContainer === null || ticketNumberContainer === void 0 ? void 0 : ticketNumberContainer.querySelector(\"[name='ticket-number']\");\n        if (target.value === \"multiple\") {\n            ticketNumberContainer === null || ticketNumberContainer === void 0 ? void 0 : ticketNumberContainer.classList.remove(\"invisible\");\n        }\n        else {\n            ticketNumberContainer === null || ticketNumberContainer === void 0 ? void 0 : ticketNumberContainer.classList.add(\"invisible\");\n        }\n        if (ticketNumber) {\n            ticketNumber.required = target.value === \"multiple\";\n        }\n    });\n    voteForm === null || voteForm === void 0 ? void 0 : voteForm.addEventListener('submit', event => {\n        let hasOption = optionContainer === null || optionContainer === void 0 ? void 0 : optionContainer.hasChildNodes();\n        if (!voteForm.checkValidity() || !hasOption) {\n            event.preventDefault();\n            event.stopPropagation();\n            optionFrame === null || optionFrame === void 0 ? void 0 : optionFrame.classList.add(\"border-danger\");\n        }\n        else {\n        }\n        voteForm.classList.add('was-validated');\n    }, false);\n    function handleChange() {\n        if (voteForm === null || voteForm === void 0 ? void 0 : voteForm.classList.contains(\"was-validated\")) {\n            if (optionContainer === null || optionContainer === void 0 ? void 0 : optionContainer.hasChildNodes()) {\n                optionFrame === null || optionFrame === void 0 ? void 0 : optionFrame.classList.remove(\"border-danger\");\n                optionFrame === null || optionFrame === void 0 ? void 0 : optionFrame.classList.add(\"border-success\");\n            }\n            else {\n                optionFrame === null || optionFrame === void 0 ? void 0 : optionFrame.classList.add(\"border-danger\");\n                optionFrame === null || optionFrame === void 0 ? void 0 : optionFrame.classList.remove(\"border-success\");\n            }\n        }\n        let ticketNumber = ticketNumberContainer === null || ticketNumberContainer === void 0 ? void 0 : ticketNumberContainer.querySelector(\"[name='ticket-number']\");\n        ticketNumber.max = optionContainer.childElementCount + \"\";\n    }\n    optionAdd === null || optionAdd === void 0 ? void 0 : optionAdd.addEventListener(\"click\", () => {\n        optionContainer === null || optionContainer === void 0 ? void 0 : optionContainer.appendChild((0, option_1.default)({\n            onRemove: handleChange\n        }));\n        handleChange();\n    });\n    (0, switch_1.default)();\n};\n\n\n//# sourceURL=webpack://vote-system/./static/js/create.ts?");

/***/ }),

/***/ "./static/js/ui/option.ts":
/*!********************************!*\
  !*** ./static/js/ui/option.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n// import create, { add, randomId } from \"../utils\";\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst utils_1 = __webpack_require__(/*! ../utils */ \"./static/js/utils/index.ts\");\n// export default function Option(payload: OptionPayload): HTMLLIElement{\n//     let option = create(\"li\", { className: \"mb-3\" });\n//     let div = create(\"div\", { className: \"row align-items-center\" });\n//     let div1 = create(\"div\", { className: \"col-2 text-center\" });\n//     let img = create(\"img\", { className: \"img-thumbnail\", attributes: { alt: \"上傳圖片\" }, style: { cursor: \"pointer\" } });\n//     let div2 = create(\"div\", {className: \"col-3\"});\n//     let div3 = create(\"div\", { className: \"form-floating\" });\n//     let nameId = randomId(5);\n//     let name = create(\"input\", { className: \"form-control\", id: nameId, attributes: {name: \"option-names\", placeholder: \" \"} });\n//     name.required = true;\n//     let namelabel = create(\"label\", { attributes: { for: nameId } });\n//     namelabel.innerText = \"選項名稱\";\n//     let file = create(\"input\", { className: \"d-none\", attributes: { \"type\": \"file\", \"aria-label\": \"option-image\", name: \"option-images\", value: \"\" } });\n//     let div4 = create(\"div\", {className: \"col-6\"});\n//     let div5 = create(\"div\", { className: \"form-floating\" });\n//     let descriptId = randomId(6);\n//     let descript = create(\"textarea\", { className: \"form-control me-3\", id: descriptId, attributes: {name: \"option-descripts\", placeholder: \" \"} });\n//     descript.required = true;\n//     let descriptlabel = create(\"label\", { attributes: { for: descriptId } });\n//     descriptlabel.innerText = \"敘述\";\n//     let div6 = create(\"div\", {className: \"col-1\"});\n//     let button = create(\"div\", { className: \"btn btn-outline-danger pb-2\", attributes: { \"type\": \"button\" } });\n//     let icon = create(\"i\", { className: \"bi bi-trash3\" })\n//     img.addEventListener(\"click\", () => file.click());\n//     file.addEventListener(\"change\", () => {\n//         let files = file.files;\n//         if (!files) return;\n//         let url = URL.createObjectURL(files[0]);\n//         img.src = url;\n//     });\n//     button.addEventListener(\"click\", () => {\n//         option.remove();\n//         payload.onRemove();\n//     });\n//     return add(option, add(div, [\n//         add(div1, [img, file]),\n//         add(div2, add(div3, [name, namelabel])),\n//         add(div4, add(div5, [descript, descriptlabel])),\n//         add(div6, add(button, icon))\n//     ]))\n//}\nfunction Option(payload) {\n    let img = (0, utils_1.ref)(\"img\");\n    let file = (0, utils_1.ref)(\"input\");\n    let button = (0, utils_1.ref)(\"button\");\n    let option = (0, utils_1.ref)(\"li\");\n    img.on(\"click\", () => file.instance.click());\n    file.on(\"change\", () => {\n        let files = file.instance.files;\n        if (!files)\n            return;\n        let url = URL.createObjectURL(files[0]);\n        img.instance.src = url;\n    });\n    button.on(\"click\", () => {\n        option.instance.remove();\n        payload.onRemove();\n    });\n    let nameId = (0, utils_1.randomId)(5);\n    let descriptId = (0, utils_1.randomId)(5);\n    return (0, utils_1.html)(img, file, button, option) `${option.bind(`<li class='mb-3'>\r\n        <div class='row align-items-center'>\r\n            <div class='col-2 text-center'>\r\n                ${img.bind(\"<img class='img-thumbnail' alt='上傳圖片' style='cursor: pointer;'/>\")}\r\n                ${file.bind(\"<input type='file' class='d-none' name='option-images' aria-label='option-image'/>\")}\r\n            </div>\r\n            <div class='col-3'>\r\n                <div class='form-floating'>\r\n                    <input class='form-control' id='${nameId}' name='option-names' placeholder=' ' require/>\r\n                    <label for='${nameId}'>選項名稱</label>\r\n                </div>\r\n            </div>\r\n            <div class='col-6'>\r\n                <div class='form-floating'>\r\n                    <textarea class='form-control me-3' name='option-descripts' placeholder=' ' id='${descriptId}' required/></textarea>\r\n                    <label for='${descriptId}'>敘述</label>\r\n                </div>  \r\n            </div>\r\n            <div class='col-1'>\r\n                ${button.bind(`<button class='btn btn-outline-danger pb-2' type='button'>\r\n                    <i class='bi bi-trash3'></i>\r\n                </button>`)}\r\n            </div>\r\n        </div>\r\n    </li>`)}`;\n}\nexports[\"default\"] = Option;\n\n\n//# sourceURL=webpack://vote-system/./static/js/ui/option.ts?");

/***/ }),

/***/ "./static/js/utils/index.ts":
/*!**********************************!*\
  !*** ./static/js/utils/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n// type Standard = keyof HTMLElementTagNameMap;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.randomId = exports.radioListener = exports.html = exports.ref = void 0;\nclass Ref {\n    constructor(tag, attribute) {\n        this.tag = tag;\n        this.attribute = attribute || {};\n        this.listeners = [];\n        this.uuid = randomId(10);\n    }\n    on(name, listener, options) {\n        this.listeners.push({\n            name: name,\n            listener: listener,\n            options: options\n        });\n    }\n    off(name, listener) {\n        this.listeners.filter(({ name: lname, listener: llistener }) => !(name === lname && listener === llistener));\n    }\n    attr(attrs) {\n        Object.assign(this.attribute, attrs);\n    }\n    bind(html) {\n        let parser = new DOMParser();\n        let element = parser.parseFromString(html, \"text/html\").body.firstElementChild;\n        if (element.tagName.toLowerCase() !== this.tag)\n            throw new Error(\"Invalid Tag Name\");\n        Object.assign(element.attributes, this.attribute);\n        element.setAttribute(\"data-ref-uuid\", this.uuid);\n        return element.outerHTML;\n    }\n    get instance() {\n        return document.querySelector(`[data-ref-uuid='${this.uuid}']`);\n    }\n    get id() {\n        return this.uuid;\n    }\n}\nfunction ref(tag, attribute) {\n    return new Ref(tag, attribute);\n}\nexports.ref = ref;\nfunction html(...refs) {\n    return (stringArr, ...placeholders) => {\n        var _a;\n        let content = String.raw({ raw: stringArr }, ...placeholders);\n        let parser = new DOMParser();\n        let element = parser.parseFromString(content, \"text/html\").body;\n        let root = element.firstElementChild;\n        for (let ref of refs) {\n            for (let { name, listener, options } of ref.listeners) {\n                (_a = root.querySelector(`[data-ref-uuid='${ref.id}']`)) === null || _a === void 0 ? void 0 : _a.addEventListener(name, listener, options);\n            }\n        }\n        return root;\n    };\n}\nexports.html = html;\nfunction radioListener(name, target, callback) {\n    let items = document.getElementsByName(name);\n    items.forEach(item => {\n        item.addEventListener(\"change\", (e) => {\n            let value = e.target.value;\n            if (target.includes(value)) {\n                callback(e);\n            }\n        });\n    });\n}\nexports.radioListener = radioListener;\nfunction randomId(count) {\n    const options = [\n        \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvw\",\n        \"1234567890\"\n    ];\n    function getRandomChar(option) {\n        const index = Math.floor(Math.random() * option.length);\n        return option.charAt(index);\n    }\n    let result = \"\";\n    while (count > 0) {\n        const randomOption = options[Math.floor(Math.random() * 2)];\n        result += getRandomChar(randomOption);\n        count--;\n    }\n    return result;\n}\nexports.randomId = randomId;\n\n\n//# sourceURL=webpack://vote-system/./static/js/utils/index.ts?");

/***/ }),

/***/ "./static/js/utils/switch.ts":
/*!***********************************!*\
  !*** ./static/js/utils/switch.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nfunction loadSwitch() {\n    let switchBtn = document.getElementById(\"switch\");\n    let switchIcon = document.getElementById(\"switch-icon\");\n    let dark = switchBtn === null || switchBtn === void 0 ? void 0 : switchBtn.getAttribute(\"data-switch-dark\");\n    document.documentElement.setAttribute(\"data-bs-theme\", dark === \"false\" ? \"light\" : \"dark\");\n    switchBtn === null || switchBtn === void 0 ? void 0 : switchBtn.addEventListener(\"click\", () => {\n        let darken = switchBtn === null || switchBtn === void 0 ? void 0 : switchBtn.getAttribute(\"data-switch-dark\");\n        document.documentElement.setAttribute(\"data-bs-theme\", darken === \"false\" ? \"dark\" : \"light\");\n        switchBtn === null || switchBtn === void 0 ? void 0 : switchBtn.setAttribute(\"data-switch-dark\", new Boolean(darken === \"false\").toString());\n        switchBtn === null || switchBtn === void 0 ? void 0 : switchBtn.classList.toggle(\"btn-light\");\n        switchBtn === null || switchBtn === void 0 ? void 0 : switchBtn.classList.toggle(\"btn-dark\");\n        switchIcon === null || switchIcon === void 0 ? void 0 : switchIcon.classList.toggle(\"bi-brightness-high-fill\");\n        switchIcon === null || switchIcon === void 0 ? void 0 : switchIcon.classList.toggle(\"bi-moon-fill\");\n    });\n}\nexports[\"default\"] = loadSwitch;\n\n\n//# sourceURL=webpack://vote-system/./static/js/utils/switch.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./static/js/create.ts");
/******/ 	
/******/ })()
;
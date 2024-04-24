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

/***/ "./static/js/Record/index.ts":
/*!***********************************!*\
  !*** ./static/js/Record/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst ui_1 = __webpack_require__(/*! ../ui */ \"./static/js/ui.ts\");\nlet box = document.getElementById(\"box\");\nlet search = document.getElementById(\"search\");\nlet closeModal = document.getElementById(\"closeModal\");\nwindow.onload = () => {\n    let theme = (0, ui_1.ThemeButton)({ mode: \"light\" });\n    theme[0].classList.add(\"m-5\");\n    document.body.appendChild(theme[0]);\n    search === null || search === void 0 ? void 0 : search.addEventListener(\"input\", (e) => {\n        let val = e.target.value;\n        for (let boxitem of box.children) {\n            let h2 = boxitem.querySelector(\"h2\");\n            if (!(h2 === null || h2 === void 0 ? void 0 : h2.innerText.toLowerCase().includes(val.toLowerCase()))) {\n                boxitem.style.display = \"none\";\n            }\n            else {\n                boxitem.style.display = \"block\";\n            }\n        }\n    });\n    closeModal === null || closeModal === void 0 ? void 0 : closeModal.addEventListener(\"show.bs.modal\", (e) => {\n        let target = e.relatedTarget;\n        let title = target.getAttribute(\"data-bs-title\");\n        let boxId = target.getAttribute(\"data-bs-boxId\");\n        let boxItem = document.getElementById(`box-${boxId}`);\n        closeModal.querySelector(\".modal-body\").innerHTML = `是否刪除${title}`;\n        let okButton = closeModal.querySelector(\".modal-footer [data-bs-value=\\\"ok\\\"]\");\n        okButton === null || okButton === void 0 ? void 0 : okButton.addEventListener(\"click\", () => {\n            boxItem === null || boxItem === void 0 ? void 0 : boxItem.remove();\n        }, { once: true });\n    });\n};\n\n\n//# sourceURL=webpack://vote-system/./static/js/Record/index.ts?");

/***/ }),

/***/ "./static/js/ui.ts":
/*!*************************!*\
  !*** ./static/js/ui.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ThemeButton = void 0;\nconst utils_1 = __importStar(__webpack_require__(/*! ./utils */ \"./static/js/utils.ts\"));\nfunction ThemeButton({ mode }) {\n    let button = (0, utils_1.default)(\"div\", {\n        className: [\n            \"btn\", \"btn-dark\", \"position-fixed\", \"bottom-0\", \"end-0\", \"rounded-3\",\n        ].join(\" \"),\n    });\n    let sunIcon = (0, utils_1.default)(\"i\", { className: \"bi bi-brightness-high-fill\", id: \"theme-icon\" });\n    let moonIcon = (0, utils_1.default)(\"i\", { className: \"bi bi-moon-fill\", id: \"theme-icon\" });\n    function setMode(mode) {\n        button.removeChild(document.getElementById(\"theme-icon\"));\n        (0, utils_1.add)(button, mode === \"light\" ? sunIcon : moonIcon);\n        document.documentElement.setAttribute(\"data-bs-theme\", mode === \"light\" ? \"light\" : \"dark\");\n        button.classList.remove(\"btn-dark\");\n        button.classList.remove(\"btn-light\");\n        button.classList.add(mode !== \"light\" ? \"btn-light\" : \"btn-dark\");\n    }\n    button.addEventListener(\"click\", () => {\n        let theme = document.documentElement.getAttribute(\"data-bs-theme\");\n        setMode(!theme || theme === \"light\" ? \"dark\" : \"light\");\n    });\n    return [(0, utils_1.add)(button, mode === \"light\" ? sunIcon : moonIcon), setMode];\n}\nexports.ThemeButton = ThemeButton;\n\n\n//# sourceURL=webpack://vote-system/./static/js/ui.ts?");

/***/ }),

/***/ "./static/js/utils.ts":
/*!****************************!*\
  !*** ./static/js/utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.randomId = exports.radioListener = exports.add = exports.createDF = exports.createNS = void 0;\nfunction create(tag, payload) {\n    let element = document.createElement(tag);\n    if (!payload)\n        return element;\n    let { className, id, attributes, style } = payload;\n    if (className)\n        element.className = className;\n    if (id)\n        element.id = id;\n    if (attributes) {\n        for (let key in attributes) {\n            element.setAttribute(key, attributes[key]);\n        }\n    }\n    if (style)\n        Object.assign(element.style, style);\n    return element;\n}\nexports[\"default\"] = create;\nfunction createNS(namespaceURI, qualifiedName, payload) {\n    let element = document.createElementNS(namespaceURI, qualifiedName);\n    if (!payload)\n        return element;\n    let { className, id, attributes, style } = payload;\n    if (className)\n        element.setAttribute(\"class\", className);\n    if (id)\n        element.setAttribute(\"id\", id);\n    if (attributes) {\n        for (let key in attributes) {\n            element.setAttribute(key, attributes[key]);\n        }\n    }\n    if (element instanceof HTMLElement && style)\n        Object.assign(element.style, style);\n    return element;\n}\nexports.createNS = createNS;\nexports.createDF = document.createDocumentFragment;\nfunction add(p, c) {\n    if (c instanceof Node) {\n        p.appendChild(c);\n    }\n    else {\n        c.forEach(child => p.appendChild(child));\n    }\n    return p;\n}\nexports.add = add;\nfunction radioListener(name, target, callback) {\n    let items = document.getElementsByName(name);\n    items.forEach(item => {\n        item.addEventListener(\"change\", (e) => {\n            let value = e.target.value;\n            if (target.includes(value)) {\n                callback(e);\n            }\n        });\n    });\n}\nexports.radioListener = radioListener;\nfunction randomId(count) {\n    const options = [\n        \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvw\",\n        \"1234567890\"\n    ];\n    function getRandomChar(option) {\n        const index = Math.floor(Math.random() * option.length);\n        return option.charAt(index);\n    }\n    let result = \"\";\n    while (count > 0) {\n        const randomOption = options[Math.floor(Math.random() * 2)];\n        result += getRandomChar(randomOption);\n        count--;\n    }\n    return result;\n}\nexports.randomId = randomId;\n\n\n//# sourceURL=webpack://vote-system/./static/js/utils.ts?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./static/js/Record/index.ts");
/******/ 	
/******/ })()
;
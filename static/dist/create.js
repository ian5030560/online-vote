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

/***/ "./static/js/Create/choiceItem.ts":
/*!****************************************!*\
  !*** ./static/js/Create/choiceItem.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst utils_1 = __importStar(__webpack_require__(/*! ../utils */ \"./static/js/utils.ts\"));\nconst ChoiceItem = () => {\n    let choice = (0, utils_1.default)(\"li\", { className: \"mb-3\" });\n    let div = (0, utils_1.default)(\"div\", { className: \"row align-items-center\" });\n    let div1 = (0, utils_1.default)(\"div\", { className: \"col-2 text-center\" });\n    let img = (0, utils_1.default)(\"img\", { className: \"img-thumbnail\", attributes: { alt: \"上傳圖片\" }, style: { cursor: \"pointer\" } });\n    let div2 = (0, utils_1.default)(\"div\", { className: \"col-3\" });\n    let div3 = (0, utils_1.default)(\"div\", { className: \"form-floating\" });\n    let nameId = (0, utils_1.randomId)(5);\n    let name = (0, utils_1.default)(\"input\", { className: \"form-control\", id: nameId, attributes: { name: \"choice-names\", placeholder: \" \" } });\n    let namelabel = (0, utils_1.default)(\"label\", { attributes: { for: nameId } });\n    namelabel.innerText = \"選項名稱\";\n    let file = (0, utils_1.default)(\"input\", { className: \"d-none\", attributes: { \"type\": \"file\", \"aria-label\": \"choice-image\", name: \"choice-images\" } });\n    let div4 = (0, utils_1.default)(\"div\", { className: \"col-6\" });\n    let div5 = (0, utils_1.default)(\"div\", { className: \"form-floating\" });\n    let descriptId = (0, utils_1.randomId)(6);\n    let descript = (0, utils_1.default)(\"textarea\", { className: \"form-control me-3\", id: descriptId, attributes: { name: \"choice-descripts\", placeholder: \" \" } });\n    let descriptlabel = (0, utils_1.default)(\"label\", { attributes: { for: descriptId } });\n    descriptlabel.innerText = \"敘述\";\n    let div6 = (0, utils_1.default)(\"div\", { className: \"col-1\" });\n    let button = (0, utils_1.default)(\"div\", { className: \"btn btn-outline-danger pb-2\", attributes: { \"type\": \"button\" } });\n    let icon = (0, utils_1.default)(\"i\", { className: \"bi bi-trash3\" });\n    img.addEventListener(\"click\", () => file.click());\n    file.addEventListener(\"change\", () => {\n        let files = file.files;\n        if (!files)\n            return;\n        let url = URL.createObjectURL(files[0]);\n        img.src = url;\n    });\n    button.addEventListener(\"click\", () => choice.remove());\n    return (0, utils_1.add)(choice, (0, utils_1.add)(div, [\n        (0, utils_1.add)(div1, [img, file]),\n        (0, utils_1.add)(div2, (0, utils_1.add)(div3, [name, namelabel])),\n        (0, utils_1.add)(div4, (0, utils_1.add)(div5, [descript, descriptlabel])),\n        (0, utils_1.add)(div6, (0, utils_1.add)(button, icon))\n    ]));\n};\nexports[\"default\"] = ChoiceItem;\n\n\n//# sourceURL=webpack://vote-system/./static/js/Create/choiceItem.ts?");

/***/ }),

/***/ "./static/js/Create/index.ts":
/*!***********************************!*\
  !*** ./static/js/Create/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst ui_1 = __webpack_require__(/*! ../ui */ \"./static/js/ui.ts\");\nconst choiceItem_1 = __importDefault(__webpack_require__(/*! ./choiceItem */ \"./static/js/Create/choiceItem.ts\"));\nlet ticket = document.getElementsByName(\"ticket\");\nlet ticketNumberContainer = document.getElementById(\"ticket-number-container\");\nlet multiple = document.getElementById(\"multiple\");\nlet choiceContainer = document.getElementById(\"choice-container\");\nlet choiceAdd = document.getElementById(\"choice-add\");\nwindow.onload = () => {\n    ticket.forEach(t => {\n        t.addEventListener(\"change\", (e) => {\n            let target = (e.target);\n            if (target.value === multiple.value) {\n                ticketNumberContainer === null || ticketNumberContainer === void 0 ? void 0 : ticketNumberContainer.classList.remove(\"invisible\");\n            }\n            else {\n                ticketNumberContainer === null || ticketNumberContainer === void 0 ? void 0 : ticketNumberContainer.classList.add(\"invisible\");\n            }\n        });\n    });\n    choiceAdd === null || choiceAdd === void 0 ? void 0 : choiceAdd.addEventListener(\"click\", () => {\n        choiceContainer === null || choiceContainer === void 0 ? void 0 : choiceContainer.appendChild((0, choiceItem_1.default)());\n    });\n    let theme = (0, ui_1.ThemeButton)({ mode: \"light\" });\n    theme[0].classList.add(\"m-5\");\n    document.body.appendChild(theme[0]);\n};\n\n\n//# sourceURL=webpack://vote-system/./static/js/Create/index.ts?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./static/js/Create/index.ts");
/******/ 	
/******/ })()
;
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

/***/ "./static/js/Choice/choiceItem.ts":
/*!****************************************!*\
  !*** ./static/js/Choice/choiceItem.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst utils_1 = __importStar(__webpack_require__(/*! ../utils */ \"./static/js/utils.ts\"));\nconst ChoiceItem = (payload) => {\n    let choice = (0, utils_1.default)(\"li\", { className: \"mb-3\" });\n    let div = (0, utils_1.default)(\"div\", { className: \"row\" });\n    let div1 = (0, utils_1.default)(\"div\", { className: \"col-2 text-center\" });\n    let img = (0, utils_1.default)(\"img\", { className: \"img-thumbnail\", attributes: { alt: \"上傳圖片\" }, style: { cursor: \"pointer\" } });\n    let file = (0, utils_1.default)(\"input\", { className: \"d-none\", attributes: { \"type\": \"file\", \"aria-label\": \"choice-image\" } });\n    let div2 = (0, utils_1.default)(\"div\", { className: \"col-10 d-flex align-items-center\" });\n    let descript = (0, utils_1.default)(\"input\", { className: \"form-control me-3\", attributes: { \"aria-label\": \"choice-descript\" } });\n    let button = (0, utils_1.default)(\"div\", { className: \"btn btn-outline-danger pb-2\", attributes: { \"type\": \"button\" } });\n    let svg = (0, utils_1.createNS)(\"http://www.w3.org/2000/svg\", \"svg\", {\n        className: \"bi bi-trash3\",\n        attributes: {\n            width: \"16\",\n            height: \"16\",\n            fill: \"currentColor\",\n            viewBox: \"0 0 16 16\"\n        }\n    });\n    let path = (0, utils_1.createNS)(\"http://www.w3.org/2000/svg\", \"path\", {\n        attributes: {\n            d: \"M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5\"\n        }\n    });\n    img.addEventListener(\"click\", () => file.click());\n    file.addEventListener(\"change\", () => {\n        let files = file.files;\n        if (!files)\n            return;\n        let url = URL.createObjectURL(files[0]);\n        img.src = url;\n    });\n    button.addEventListener(\"click\", () => payload.container.removeChild(choice));\n    return (0, utils_1.add)(choice, (0, utils_1.add)(div, [\n        (0, utils_1.add)(div1, [img, file]),\n        (0, utils_1.add)(div2, [\n            descript,\n            (0, utils_1.add)(button, (0, utils_1.add)(svg, path))\n        ])\n    ]));\n};\nexports[\"default\"] = ChoiceItem;\n\n\n//# sourceURL=webpack://vote-system/./static/js/Choice/choiceItem.ts?");

/***/ }),

/***/ "./static/js/Choice/index.ts":
/*!***********************************!*\
  !*** ./static/js/Choice/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst choiceItem_1 = __importDefault(__webpack_require__(/*! ./choiceItem */ \"./static/js/Choice/choiceItem.ts\"));\nlet ticket = document.getElementsByName(\"ticket\");\nlet ticketNumberContainer = document.getElementById(\"ticket-number-container\");\nlet multiple = document.getElementById(\"multiple\");\nlet choiceContainer = document.getElementById(\"choice-container\");\nlet choiceAdd = document.getElementById(\"choice-add\");\nwindow.onload = () => {\n    ticket.forEach(t => {\n        t.addEventListener(\"change\", (e) => {\n            let target = (e.target);\n            if (target.value === multiple.value) {\n                ticketNumberContainer === null || ticketNumberContainer === void 0 ? void 0 : ticketNumberContainer.classList.remove(\"invisible\");\n            }\n            else {\n                ticketNumberContainer === null || ticketNumberContainer === void 0 ? void 0 : ticketNumberContainer.classList.add(\"invisible\");\n            }\n        });\n    });\n    choiceAdd === null || choiceAdd === void 0 ? void 0 : choiceAdd.addEventListener(\"click\", () => {\n        choiceContainer === null || choiceContainer === void 0 ? void 0 : choiceContainer.appendChild((0, choiceItem_1.default)({ container: choiceContainer }));\n    });\n};\n\n\n//# sourceURL=webpack://vote-system/./static/js/Choice/index.ts?");

/***/ }),

/***/ "./static/js/utils.ts":
/*!****************************!*\
  !*** ./static/js/utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.radioListener = exports.add = exports.createDF = exports.createNS = void 0;\nfunction create(tag, payload) {\n    let element = document.createElement(tag);\n    if (!payload)\n        return element;\n    let { className, id, attributes, style } = payload;\n    if (className)\n        element.className = className;\n    if (id)\n        element.id = id;\n    if (attributes) {\n        for (let key in attributes) {\n            element.setAttribute(key, attributes[key]);\n        }\n    }\n    if (style)\n        Object.assign(element.style, style);\n    return element;\n}\nexports[\"default\"] = create;\nfunction createNS(namespaceURI, qualifiedName, payload) {\n    let element = document.createElementNS(namespaceURI, qualifiedName);\n    if (!payload)\n        return element;\n    let { className, id, attributes, style } = payload;\n    if (className)\n        element.setAttribute(\"class\", className);\n    if (id)\n        element.setAttribute(\"id\", id);\n    if (attributes) {\n        for (let key in attributes) {\n            element.setAttribute(key, attributes[key]);\n        }\n    }\n    if (element instanceof HTMLElement && style)\n        Object.assign(element.style, style);\n    return element;\n}\nexports.createNS = createNS;\nexports.createDF = document.createDocumentFragment;\nfunction add(p, c) {\n    if (c instanceof Node) {\n        p.appendChild(c);\n    }\n    else {\n        c.forEach(child => p.appendChild(child));\n    }\n    return p;\n}\nexports.add = add;\nfunction radioListener(name, target, callback) {\n    let items = document.getElementsByName(name);\n    items.forEach(item => {\n        item.addEventListener(\"change\", (e) => {\n            let value = e.target.value;\n            if (target.includes(value)) {\n                callback(e);\n            }\n        });\n    });\n}\nexports.radioListener = radioListener;\n\n\n//# sourceURL=webpack://vote-system/./static/js/utils.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./static/js/Choice/index.ts");
/******/ 	
/******/ })()
;
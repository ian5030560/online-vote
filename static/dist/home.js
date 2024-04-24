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

/***/ "./static/js/Home/index.ts":
/*!*********************************!*\
  !*** ./static/js/Home/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst ui_1 = __webpack_require__(/*! ../ui */ \"./static/js/ui.ts\");\nconst utils_1 = __importStar(__webpack_require__(/*! ../utils */ \"./static/js/utils.ts\"));\nconst table_1 = __importDefault(__webpack_require__(/*! ./table */ \"./static/js/Home/table.ts\"));\nlet resultArea = document.getElementById(\"result-area\");\nwindow.onload = () => {\n    let table = (0, table_1.default)({\n        columns: [\"主題\", \"敘述\", \"日期\", \"人數\"],\n        items: [\n            [\"example\", \"description\", \"2024/12/05 ~ 2024/12/06\", \"12人\"],\n            [\"example\", \"description\", \"2024/12/05 ~ 2024/12/06\", \"12人\"],\n        ].map(item => {\n            return item.map((it) => {\n                let div = (0, utils_1.default)(\"div\");\n                div.innerText = it;\n                return div;\n            });\n        })\n    });\n    resultArea === null || resultArea === void 0 ? void 0 : resultArea.appendChild(table);\n    (0, utils_1.radioListener)(\"format\", [\"table\", \"card\"], (e) => {\n        let value = e.target.value;\n        if (value !== \"table\") {\n            table.classList.add(\"card-table\");\n        }\n        else {\n            table.classList.remove(\"card-table\");\n        }\n    });\n    let theme = (0, ui_1.ThemeButton)({ mode: \"light\" });\n    theme[0].classList.add(\"m-5 p-2\");\n    document.body.appendChild(theme[0]);\n};\n\n\n//# sourceURL=webpack://vote-system/./static/js/Home/index.ts?");

/***/ }),

/***/ "./static/js/Home/table.ts":
/*!*********************************!*\
  !*** ./static/js/Home/table.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst utils_1 = __importStar(__webpack_require__(/*! ../utils */ \"./static/js/utils.ts\"));\nconst Table = (payload) => {\n    let table = (0, utils_1.default)(\"table\", { className: \"table\" });\n    let thead = (0, utils_1.default)(\"thead\");\n    let tbody = (0, utils_1.default)(\"tbody\");\n    let tcol = (0, utils_1.default)(\"tr\");\n    return (0, utils_1.add)(table, [\n        (0, utils_1.add)(thead, (0, utils_1.add)(tcol, payload.columns.map(col => {\n            let th = (0, utils_1.default)(\"th\", { attributes: { scope: \"col\" } });\n            th.innerText = col;\n            return th;\n        }))),\n        (0, utils_1.add)(tbody, payload.items.map(item => {\n            let tr = (0, utils_1.default)(\"tr\");\n            return (0, utils_1.add)(tr, item.map((it, i) => {\n                if (i === 0) {\n                    let th = (0, utils_1.default)(\"th\", { attributes: { scope: \"row\" } });\n                    th.appendChild(it);\n                    return th;\n                }\n                else {\n                    let td = (0, utils_1.default)(\"td\");\n                    td.appendChild(it);\n                    return td;\n                }\n            }));\n        })),\n    ]);\n};\nexports[\"default\"] = Table;\n\n\n//# sourceURL=webpack://vote-system/./static/js/Home/table.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./static/js/Home/index.ts");
/******/ 	
/******/ })()
;
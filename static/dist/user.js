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

/***/ "./static/js/User/index.ts":
/*!*********************************!*\
  !*** ./static/js/User/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst ui_1 = __webpack_require__(/*! ../ui */ \"./static/js/ui.ts\");\nwindow.onload = () => {\n    let theme = (0, ui_1.ThemeButton)({ mode: \"light\" });\n    theme[0].classList.add(\"m-5\");\n    document.body.appendChild(theme[0]);\n};\n\n\n//# sourceURL=webpack://vote-system/./static/js/User/index.ts?");

/***/ }),

/***/ "./static/js/ui.ts":
/*!*************************!*\
  !*** ./static/js/ui.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ThemeButton = void 0;\nconst utils_1 = __importStar(__webpack_require__(/*! ./utils */ \"./static/js/utils.ts\"));\nfunction ThemeButton({ mode }) {\n    let button = (0, utils_1.default)(\"div\", {\n        className: [\n            \"btn\", \"btn-dark\", \"position-fixed\", \"bottom-0\", \"end-0\", \"rounded-3\",\n        ].join(\" \"),\n    });\n    let sunIcon = (0, utils_1.createNS)(\"http://www.w3.org/2000/svg\", \"svg\", {\n        className: \"bi bi-brightness-high-fill\",\n        id: \"theme-icon\",\n        attributes: { width: \"16\", height: \"16\", fill: \"currentColor\", viewBox: \"0 0 16 16\", }\n    });\n    let sunPath = (0, utils_1.createNS)(\"http://www.w3.org/2000/svg\", \"path\", {\n        attributes: { d: \"M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708\" }\n    });\n    let moonIcon = (0, utils_1.createNS)(\"http://www.w3.org/2000/svg\", \"svg\", {\n        className: \"bi bi-moon-fill\",\n        id: \"theme-icon\",\n        attributes: { width: \"16\", height: \"16\", fill: \"currentColor\", viewBox: \"0 0 16 16\" }\n    });\n    let moonPath = (0, utils_1.createNS)(\"http://www.w3.org/2000/svg\", \"path\", {\n        attributes: { d: \"M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278\" }\n    });\n    function setMode(mode) {\n        button.removeChild(document.getElementById(\"theme-icon\"));\n        (0, utils_1.add)(button, mode === \"light\" ? (0, utils_1.add)(sunIcon, sunPath) : (0, utils_1.add)(moonIcon, moonPath));\n        document.documentElement.setAttribute(\"data-bs-theme\", mode === \"light\" ? \"light\" : \"dark\");\n        button.classList.remove(\"btn-dark\");\n        button.classList.remove(\"btn-light\");\n        button.classList.add(mode !== \"light\" ? \"btn-light\" : \"btn-dark\");\n    }\n    button.addEventListener(\"click\", () => {\n        let theme = document.documentElement.getAttribute(\"data-bs-theme\");\n        setMode(!theme || theme === \"light\" ? \"dark\" : \"light\");\n    });\n    return [(0, utils_1.add)(button, mode === \"light\" ? (0, utils_1.add)(sunIcon, sunPath) : (0, utils_1.add)(moonIcon, moonPath)), setMode];\n}\nexports.ThemeButton = ThemeButton;\n\n\n//# sourceURL=webpack://vote-system/./static/js/ui.ts?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./static/js/User/index.ts");
/******/ 	
/******/ })()
;
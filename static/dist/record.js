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

/***/ "./static/js/record.ts":
/*!*****************************!*\
  !*** ./static/js/record.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst switch_1 = __importDefault(__webpack_require__(/*! ./ui/switch */ \"./static/js/ui/switch.ts\"));\nlet box = document.getElementById(\"box\");\nlet search = document.getElementById(\"search\");\nlet closeModal = document.getElementById(\"closeModal\");\nwindow.onload = () => {\n    search === null || search === void 0 ? void 0 : search.addEventListener(\"input\", (e) => {\n        let val = e.target.value;\n        for (let boxitem of box.children) {\n            let h2 = boxitem.querySelector(\"h2\");\n            if (!(h2 === null || h2 === void 0 ? void 0 : h2.innerText.toLowerCase().includes(val.toLowerCase()))) {\n                boxitem.style.display = \"none\";\n            }\n            else {\n                boxitem.style.display = \"block\";\n            }\n        }\n    });\n    closeModal === null || closeModal === void 0 ? void 0 : closeModal.addEventListener(\"show.bs.modal\", (e) => {\n        let target = e.relatedTarget;\n        let title = target.getAttribute(\"data-bs-title\");\n        let boxId = target.getAttribute(\"data-bs-boxId\");\n        let boxItem = document.getElementById(`box-${boxId}`);\n        closeModal.querySelector(\".modal-body\").innerHTML = `是否刪除${title}`;\n        let okButton = closeModal.querySelector(\".modal-footer [data-bs-value=\\\"ok\\\"]\");\n        okButton === null || okButton === void 0 ? void 0 : okButton.addEventListener(\"click\", () => {\n            boxItem === null || boxItem === void 0 ? void 0 : boxItem.remove();\n            console.log();\n        }, { once: true });\n    });\n    (0, switch_1.default)();\n};\n\n\n//# sourceURL=webpack://online-vote/./static/js/record.ts?");

/***/ }),

/***/ "./static/js/ui/switch.ts":
/*!********************************!*\
  !*** ./static/js/ui/switch.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst framewrok_1 = __webpack_require__(/*! ../utils/framewrok */ \"./static/js/utils/framewrok.ts\");\nfunction switchButton(dark, onSwtich) {\n    return {\n        dom: (dom) => {\n            let div = $(dom).find(\"div\");\n            let i = $(dom).find(\"i\");\n            let html = document.documentElement;\n            div.on(\"click\", () => {\n                let value = html.getAttribute(\"data-bs-theme\");\n                let bool = value === \"light\" ? false : true;\n                onSwtich === null || onSwtich === void 0 ? void 0 : onSwtich(!bool);\n                i.toggleClass(\"bi-brightness-high-fill\").toggleClass(\"bi-moon-fill\");\n                div.toggleClass(\"btn-light\").toggleClass(\"btn-dark\");\n                html.setAttribute(\"data-bs-theme\", !bool ? \"dark\" : \"light\");\n            });\n            html.setAttribute(\"data-bs-theme\", !dark ? \"light\" : \"dark\");\n        },\n        render: `<div class='btn ${dark ? \"btn-light\" : \"btn-dark\"} position-fixed bottom-0 end-0 rounded-3 m-5'>\r\n                 <i class='${dark ? \"bi bi-brightness-high-fill\" : \"bi bi-moon-fill\"}'></i>\r\n             </div>`\n    };\n}\nfunction switchTheme() {\n    let dark = localStorage.getItem(\"theme-dark\");\n    let darkBool = dark ? dark === \"true\" ? true : false : false;\n    let button = (0, framewrok_1.html)(switchButton(darkBool, (value) => {\n        localStorage.setItem(\"theme-dark\", value ? \"true\" : \"false\");\n    }));\n    document.body.appendChild(button);\n}\nexports[\"default\"] = switchTheme;\n\n\n//# sourceURL=webpack://online-vote/./static/js/ui/switch.ts?");

/***/ }),

/***/ "./static/js/utils/framewrok.ts":
/*!**************************************!*\
  !*** ./static/js/utils/framewrok.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.html = void 0;\nfunction html(comp) {\n    var _a;\n    let nodes = new DOMParser().parseFromString(comp.render, \"text/html\").body.childNodes;\n    let df = document.createDocumentFragment();\n    df.append(...Array.from(nodes));\n    (_a = comp.dom) === null || _a === void 0 ? void 0 : _a.call(comp, df);\n    return df;\n}\nexports.html = html;\n\n\n//# sourceURL=webpack://online-vote/./static/js/utils/framewrok.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./static/js/record.ts");
/******/ 	
/******/ })()
;
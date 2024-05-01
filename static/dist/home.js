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

/***/ "./static/js/home.ts":
/*!***************************!*\
  !*** ./static/js/home.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst switch_1 = __importDefault(__webpack_require__(/*! ./utils/switch */ \"./static/js/utils/switch.ts\"));\nwindow.onload = () => {\n    let buttons = document.getElementsByClassName(\"goto\");\n    for (let button of buttons) {\n        button.addEventListener(\"click\", (e) => {\n            window.location.href = button.getAttribute(\"data-href\");\n        });\n    }\n    (0, switch_1.default)();\n};\n\n\n//# sourceURL=webpack://vote-system/./static/js/home.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./static/js/home.ts");
/******/ 	
/******/ })()
;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/scss/index.scss":
/*!************************************!*\
  !*** ./src/assets/scss/index.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/estilo.css":
/*!***********************************!*\
  !*** ./src/assets/css/estilo.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/teste.css":
/*!**********************************!*\
  !*** ./src/assets/css/teste.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/js/moduloA.js":
/*!**********************************!*\
  !*** ./src/assets/js/moduloA.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

const moduloB = __webpack_require__(/*! ./moduloB */ "./src/assets/js/moduloB.js");
console.log(moduloB.saudação());

/***/ }),

/***/ "./src/assets/js/moduloB.js":
/*!**********************************!*\
  !*** ./src/assets/js/moduloB.js ***!
  \**********************************/
/***/ ((module) => {

module.exports = {
    saudação() { return 'Olá eu sou o Módulo B!!!' }
}

/***/ }),

/***/ "./src/assets/js/pessoa.js":
/*!*********************************!*\
  !*** ./src/assets/js/pessoa.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pessoa)
/* harmony export */ });
/* harmony import */ var _moduloA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduloA */ "./src/assets/js/moduloA.js");
/* harmony import */ var _moduloA__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_moduloA__WEBPACK_IMPORTED_MODULE_0__);


class Pessoa{
    cumprimentar() {
        return "Pessoa diz: Bom Dia!"
    }
}

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_estilo_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/estilo.css */ "./src/assets/css/estilo.css");
/* harmony import */ var _assets_css_teste_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/teste.css */ "./src/assets/css/teste.css");
/* harmony import */ var _assets_scss_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/scss/index.scss */ "./src/assets/scss/index.scss");
/* harmony import */ var _assets_js_pessoa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/js/pessoa */ "./src/assets/js/pessoa.js");
// Estilo




// JavaScript 


const atendente = new _assets_js_pessoa__WEBPACK_IMPORTED_MODULE_3__["default"]()
console.log(atendente.cumprimentar())
})();

/******/ })()
;
//# sourceMappingURL=main.js.map
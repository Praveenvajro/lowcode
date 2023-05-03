var vajroPlugin;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils/common.ts":
/*!*****************************!*\
  !*** ./src/utils/common.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCombinedOfferConfig": () => (/* binding */ getCombinedOfferConfig),
/* harmony export */   "getOfferBasedConfig": () => (/* binding */ getOfferBasedConfig)
/* harmony export */ });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var getCombinedOfferConfig = function (configDetails) {
    return configDetails.reduce(function (combinedDetails, configDetail) {
        var combinedOfferConfig = combinedDetails.combinedOfferConfig, nonCombinedOfferConfig = combinedDetails.nonCombinedOfferConfig;
        console.log({ combinedOfferConfig: combinedOfferConfig, nonCombinedOfferConfig: nonCombinedOfferConfig });
        var combinedOffer = configDetail.combinedOffer;
        if (combinedOffer) {
            return __assign(__assign({}, combinedDetails), { combinedOfferConfig: __spreadArray(__spreadArray([], combinedOfferConfig, true), [configDetail], false) });
        }
        return __assign(__assign({}, combinedDetails), { nonCombinedOfferConfig: __spreadArray(__spreadArray([], nonCombinedOfferConfig, true), [configDetail], false) });
    }, { combinedOfferConfig: [], nonCombinedOfferConfig: [] });
};
var getOfferBasedConfig = function (configDetails) {
    return configDetails.reduce(function (offerConfigDetails, configDetail) {
        var _a, _b;
        var offerCategory = configDetail.offerCategory;
        if (offerConfigDetails[offerCategory]) {
            return __assign(__assign({}, offerConfigDetails), (_a = {}, _a[offerCategory] = __spreadArray(__spreadArray([], offerConfigDetails[offerCategory], true), [configDetail], false), _a));
        }
        return __assign(__assign({}, offerConfigDetails), (_b = {}, _b[offerCategory] = [configDetail], _b));
    }, {});
};


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "flow": () => (/* binding */ flow)
/* harmony export */ });
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/common */ "./src/utils/common.ts");

var flow = function (appContext, configSchema) {
    var cartLineItems = appContext.cartLineItems;
    var lineItems = cartLineItems.lineItems;
    console.log({ lineItems: lineItems, configSchema: configSchema });
    var _a = (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.getCombinedOfferConfig)(configSchema), combinedOfferConfig = _a.combinedOfferConfig, nonCombinedOfferConfig = _a.nonCombinedOfferConfig;
    var offerBasedConfigForCombinedOffer = (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.getOfferBasedConfig)(combinedOfferConfig);
    console.log({ combinedOfferConfig: combinedOfferConfig, nonCombinedOfferConfig: nonCombinedOfferConfig, offerBasedConfigForCombinedOffer: offerBasedConfigForCombinedOffer });
    return "test";
};

})();

vajroPlugin = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=vajroPlugin.js.map

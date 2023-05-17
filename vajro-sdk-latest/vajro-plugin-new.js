var vajroPlugin;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controller/automaticOffer.ts":
/*!******************************************!*\
  !*** ./src/controller/automaticOffer.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAutomaticOfferProducts": () => (/* binding */ getAutomaticOfferProducts)
/* harmony export */ });
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common */ "./src/utils/common.ts");
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

var getAutomaticOfferProducts = function (configOffers, lineItems, offerAppliedProducts) {
    var lineItemsObj = (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.getLineItemsObj)(lineItems);
    configOffers.forEach(function (config) {
        var cartType = config.cartType, cartValue = config.cartValue, buyOfferType = config.buyOfferType, buyProducts = config.buyProducts, buyCollections = config.buyCollections, discountValue = config.getProductCount, reccuringFreeProduct = config.reccuringFreeProduct, getProducts = config.getProducts;
        var offerLineItems = [];
        if (buyOfferType === 'products') {
            buyProducts.forEach(function (productDetails) {
                var variantId = productDetails.variantId;
                if (lineItemsObj[variantId]) {
                    offerLineItems = __spreadArray(__spreadArray([], offerLineItems, true), [lineItemsObj[variantId]], false);
                }
            });
        }
        else if (buyOfferType === 'collections') {
            buyCollections.forEach(function (collectionDetails) {
                var collectionId = collectionDetails.collectionId;
                var collectionLineItems = lineItems.filter(function (lineItem) {
                    return collectionId === lineItem.collectionId;
                });
                if (collectionLineItems.length > 0) {
                    offerLineItems = __spreadArray(__spreadArray([], offerLineItems, true), collectionLineItems, true);
                }
            });
        }
        else {
            offerLineItems = lineItems;
        }
        var finalCartValue = cartType === 'amount' ? (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.getCartTotal)(offerLineItems) : (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.getCartCount)(offerLineItems);
        if (finalCartValue >= cartValue) {
            var freebieQuantity_1 = reccuringFreeProduct ? Math.floor(finalCartValue / cartValue) * discountValue : discountValue;
            getProducts.forEach(function (productDetails) {
                var _a, _b;
                var variantId = productDetails.variantId, productId = productDetails.productId, productPrice = productDetails.productPrice;
                var variantOfferDetails = offerAppliedProducts[variantId];
                var _c = lineItemsObj[variantId] || {}, lineItemHandle = _c.lineItemHandle, _d = _c.quantity, quantity = _d === void 0 ? 0 : _d;
                var _e = lineItemsObj[variantId] && lineItemsObj[variantId].customAttributes || {}, _productQuantity = _e._productQuantity, _f = _e._freeQuantity, _freeQuantity = _f === void 0 ? 0 : _f;
                var finalProductQuantity = _productQuantity ? Number(_productQuantity) : (Number(quantity) - Number(_freeQuantity));
                var _g = (variantOfferDetails || {}).customAttributes, customAttributes = _g === void 0 ? {} : _g;
                if (!!freebieQuantity_1 && variantOfferDetails) {
                    offerAppliedProducts = __assign(__assign({}, offerAppliedProducts), (_a = {}, _a[variantId] = __assign(__assign({}, variantOfferDetails), { customAttributes: __assign(__assign(__assign({}, customAttributes), variantOfferDetails.customAttributes), { _productQuantity: finalProductQuantity, _freeQuantity: ((customAttributes === null || customAttributes === void 0 ? void 0 : customAttributes.freeQuantity) || 0) + freebieQuantity_1 }) }), _a));
                }
                else if (!!freebieQuantity_1) {
                    offerAppliedProducts = __assign(__assign({}, offerAppliedProducts), (_b = {}, _b[variantId] = {
                        variantId: variantId,
                        productId: productId,
                        lineItemHandle: lineItemHandle,
                        customAttributes: __assign(__assign({}, customAttributes), { _productQuantity: finalProductQuantity, _actualUnitPrice: Number(productPrice), _freeQuantity: freebieQuantity_1 })
                    }, _b));
                }
            });
        }
    });
    return offerAppliedProducts;
};


/***/ }),

/***/ "./src/controller/buyXChooseY.ts":
/*!***************************************!*\
  !*** ./src/controller/buyXChooseY.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBuyXChooseYOfferProducts": () => (/* binding */ getBuyXChooseYOfferProducts)
/* harmony export */ });
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common */ "./src/utils/common.ts");
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

var getBuyXChooseYOfferProducts = function (configOffers, lineItems, offerAppliedProducts) {
    var lineItemsObj = (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.getLineItemsObj)(lineItems);
    configOffers.forEach(function (config) {
        var discountValue = config.getProductCount, getProducts = config.getProducts;
        getProducts.forEach(function (productDetails) {
            var _a, _b;
            var _c;
            var variantId = productDetails.variantId, productId = productDetails.productId, productPrice = productDetails.productPrice;
            var _d = lineItemsObj[variantId] || {}, _e = _d.quantity, quantity = _e === void 0 ? 0 : _e, _f = _d.freeQuantity, freeQuantity = _f === void 0 ? 0 : _f, lineItemHandle = _d.lineItemHandle;
            var freebieQuantity = (quantity - freeQuantity) > discountValue ? discountValue : quantity - freeQuantity;
            var variantOfferDetails = offerAppliedProducts[variantId];
            var _g = (variantOfferDetails || {}).customAttributes, customAttributes = _g === void 0 ? {} : _g;
            if (!!freebieQuantity && variantOfferDetails) {
                offerAppliedProducts = __assign(__assign({}, offerAppliedProducts), (_a = {}, _a[variantId] = __assign(__assign({}, variantOfferDetails), { customAttributes: __assign(__assign(__assign({}, customAttributes), variantOfferDetails.customAttributes), { _discountQuantity: freebieQuantity + (((_c = variantOfferDetails.customAttributes) === null || _c === void 0 ? void 0 : _c._discountQuantity) || 0) }) }), _a));
            }
            else if (!!freebieQuantity) {
                offerAppliedProducts = __assign(__assign({}, offerAppliedProducts), (_b = {}, _b[variantId] = {
                    variantId: variantId,
                    productId: productId,
                    lineItemHandle: lineItemHandle,
                    customAttributes: __assign(__assign({}, customAttributes), { _productQuantity: quantity - freeQuantity, _actualUnitPrice: Number(productPrice), _discountQuantity: freebieQuantity })
                }, _b));
            }
        });
    });
    return offerAppliedProducts;
};


/***/ }),

/***/ "./src/controller/flatDiscount.ts":
/*!****************************************!*\
  !*** ./src/controller/flatDiscount.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFlatOfferProducts": () => (/* binding */ getFlatOfferProducts)
/* harmony export */ });
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common */ "./src/utils/common.ts");
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

var getFlatOfferProducts = function (configOffers, lineItems, offerAppliedProducts) {
    var lineItemsObj = (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.getLineItemsObj)(lineItems);
    var appliedProductDetails = __assign({}, offerAppliedProducts);
    function getOfferedProductDetails(offerLineItems, fixedAmount, isSplitNeed) {
        if (offerLineItems.length === 0)
            offerLineItems;
        var newOfferLineItems = offerLineItems.map(function (lineItem) {
            var variantId = lineItem.variantId, _a = lineItem.freeQuantity, freeQuantity = _a === void 0 ? 0 : _a;
            var _b = (appliedProductDetails[variantId] || {}).customAttributes, customAttributes = _b === void 0 ? {} : _b;
            var _c = customAttributes.discountQuantity, discountQuantity = _c === void 0 ? 0 : _c;
            return __assign(__assign({}, lineItem), { freeQuantity: freeQuantity + discountQuantity });
        });
        var cartTotal = (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.getCartTotal)(newOfferLineItems);
        offerLineItems.forEach(function (lineItem) {
            var _a;
            var variantId = lineItem.variantId, productId = lineItem.productId, lineItemHandle = lineItem.lineItemHandle, unitPrice = lineItem.unitPrice, _b = lineItem.quantity, quantity = _b === void 0 ? 0 : _b, _c = lineItem.freeQuantity, freeQuantity = _c === void 0 ? 0 : _c, _d = lineItem.customAttributes, _e = _d === void 0 ? {} : _d, _f = _e.actualUnitPrice, actualUnitPrice = _f === void 0 ? unitPrice : _f;
            var variantOfferDetails = appliedProductDetails[variantId] || {};
            var _g = variantOfferDetails.quantity, productQuantity = _g === void 0 ? quantity : _g, _h = variantOfferDetails.customAttributes, customAttributes = _h === void 0 ? {} : _h;
            var actualQuantity = productQuantity - freeQuantity;
            var unitPriceDiscount = isSplitNeed ? (actualUnitPrice * (((fixedAmount / cartTotal) * 100) / 100)) : fixedAmount;
            var _j = customAttributes._discountQuantity, _discountQuantity = _j === void 0 ? 0 : _j;
            appliedProductDetails = __assign(__assign({}, appliedProductDetails), (_a = {}, _a[variantId] = __assign(__assign({}, variantOfferDetails), { variantId: variantId, productId: productId, lineItemHandle: lineItemHandle, customAttributes: __assign(__assign({}, customAttributes), { _actualUnitPrice: Number(actualUnitPrice), _productQuantity: actualQuantity, _discountPrice: unitPriceDiscount >= actualUnitPrice ? actualUnitPrice : unitPriceDiscount, _discountQuantity: unitPriceDiscount >= actualUnitPrice ? actualQuantity : _discountQuantity, _flatDiscountDetails: {
                        lineItems: offerLineItems,
                        splitFlatAmount: isSplitNeed,
                        discountValue: fixedAmount
                    } }) }), _a));
        });
    }
    configOffers.forEach(function (config) {
        var discountValue = config.discountValue, getOfferType = config.getOfferType, getProducts = config.getProducts, getCollections = config.getCollections, splitFlatAmount = config.splitFlatAmount;
        var offerLineItems = [];
        if (getOfferType === "products") {
            getProducts.forEach(function (productDetails) {
                var variantId = productDetails.variantId;
                if (lineItemsObj[variantId]) {
                    offerLineItems = __spreadArray(__spreadArray([], offerLineItems, true), [lineItemsObj[variantId]], false);
                }
            });
        }
        else if (getOfferType === "collections") {
            getCollections.forEach(function (collectionDetails) {
                var collectionId = collectionDetails.collectionId;
                var collectionLineItems = lineItems.filter(function (lineItem) {
                    return collectionId === lineItem.collectionId;
                });
                if (collectionLineItems.length > 0) {
                    offerLineItems = __spreadArray(__spreadArray([], offerLineItems, true), collectionLineItems, true);
                }
            });
        }
        else {
            offerLineItems = __spreadArray([], lineItems, true);
        }
        var cartTotal = (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.getCartTotal)(offerLineItems);
        var crntAppliedProductDetails = __assign({}, appliedProductDetails);
        offerLineItems = offerLineItems.filter(function (lineItem) {
            var variantId = lineItem.variantId, unitPrice = lineItem.unitPrice, _a = lineItem.customAttributes, _b = _a === void 0 ? {} : _a, _c = _b.actualUnitPrice, actualUnitPrice = _c === void 0 ? unitPrice : _c;
            var variantOfferDetails = crntAppliedProductDetails[variantId] || {};
            var _d = variantOfferDetails.customAttributes, customAttributes = _d === void 0 ? {} : _d;
            var unitPriceDiscount = splitFlatAmount ? (actualUnitPrice * (discountValue / cartTotal)) : discountValue;
            var _e = customAttributes.discountPrice, discountPrice = _e === void 0 ? 0 : _e, _f = customAttributes.flatDiscountDetails, flatDiscountDetails = _f === void 0 ? {} : _f;
            var _g = flatDiscountDetails.lineItems, appliedLineItems = _g === void 0 ? [] : _g, _h = flatDiscountDetails.splitFlatAmount, issplitFlatAmountApplied = _h === void 0 ? false : _h, _j = flatDiscountDetails.discountValue, appliedDiscountValue = _j === void 0 ? 0 : _j;
            if (unitPriceDiscount > discountPrice) {
                var filteredLineItems = appliedLineItems.filter(function (appliedLineItem) { return appliedLineItem.variantId !== variantId; });
                if (issplitFlatAmountApplied && filteredLineItems.length > 0) {
                    getOfferedProductDetails(filteredLineItems, appliedDiscountValue, issplitFlatAmountApplied);
                }
            }
            return unitPriceDiscount > discountPrice;
        });
        getOfferedProductDetails(offerLineItems, discountValue, splitFlatAmount);
    });
    return appliedProductDetails;
};


/***/ }),

/***/ "./src/controller/percentageDiscount.ts":
/*!**********************************************!*\
  !*** ./src/controller/percentageDiscount.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPercentageOfferProducts": () => (/* binding */ getPercentageOfferProducts)
/* harmony export */ });
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common */ "./src/utils/common.ts");
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

var getPercentageOfferProducts = function (configOffers, lineItems, offerAppliedProducts) {
    var lineItemsObj = (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.getLineItemsObj)(lineItems);
    configOffers.forEach(function (config) {
        var discountValue = config.discountValue, getOfferType = config.getOfferType, getProducts = config.getProducts, getCollections = config.getCollections;
        var offerLineItems = [];
        if (getOfferType === "products") {
            getProducts.forEach(function (productDetails) {
                var variantId = productDetails.variantId;
                if (lineItemsObj[variantId]) {
                    offerLineItems = __spreadArray(__spreadArray([], offerLineItems, true), [lineItemsObj[variantId]], false);
                }
            });
        }
        else if (getOfferType === "collections") {
            getCollections.forEach(function (collectionDetails) {
                var collectionId = collectionDetails.collectionId;
                var collectionLineItems = lineItems.filter(function (lineItem) {
                    return collectionId === lineItem.collectionId;
                });
                if (collectionLineItems.length > 0) {
                    offerLineItems = __spreadArray(__spreadArray([], offerLineItems, true), collectionLineItems, true);
                }
            });
        }
        else {
            offerLineItems = __spreadArray([], lineItems, true);
        }
        offerLineItems.forEach(function (lineItem) {
            var _a;
            var variantId = lineItem.variantId, productId = lineItem.productId, lineItemHandle = lineItem.lineItemHandle, unitPrice = lineItem.unitPrice, _b = lineItem.quantity, quantity = _b === void 0 ? 0 : _b, _c = lineItem.freeQuantity, freeQuantity = _c === void 0 ? 0 : _c, _d = lineItem.customAttributes, _e = _d === void 0 ? {} : _d, _f = _e.actualUnitPrice, actualUnitPrice = _f === void 0 ? unitPrice : _f;
            var variantOfferDetails = offerAppliedProducts[variantId] || {};
            var _g = variantOfferDetails.quantity, productQuantity = _g === void 0 ? quantity : _g, _h = variantOfferDetails.customAttributes, customAttributes = _h === void 0 ? {} : _h;
            var actualQuantity = productQuantity - freeQuantity;
            var unitPriceDiscount = actualUnitPrice * (discountValue / 100);
            var _j = customAttributes._discountPrice, _discountPrice = _j === void 0 ? 0 : _j, _k = customAttributes._discountQuantity, _discountQuantity = _k === void 0 ? 0 : _k;
            if (unitPriceDiscount > _discountPrice) {
                offerAppliedProducts = __assign(__assign({}, offerAppliedProducts), (_a = {}, _a[variantId] = __assign(__assign({}, variantOfferDetails), { variantId: variantId, productId: productId, lineItemHandle: lineItemHandle, customAttributes: __assign(__assign({}, customAttributes), { _actualUnitPrice: Number(actualUnitPrice), _discountPrice: unitPriceDiscount, _productQuantity: actualQuantity, _discountQuantity: unitPriceDiscount === actualUnitPrice ? actualQuantity : _discountQuantity }) }), _a));
            }
        });
    });
    return offerAppliedProducts;
};


/***/ }),

/***/ "./src/utils/common.ts":
/*!*****************************!*\
  !*** ./src/utils/common.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCartCount": () => (/* binding */ getCartCount),
/* harmony export */   "getCartTotal": () => (/* binding */ getCartTotal),
/* harmony export */   "getCombinedOfferConfig": () => (/* binding */ getCombinedOfferConfig),
/* harmony export */   "getLineItemsObj": () => (/* binding */ getLineItemsObj),
/* harmony export */   "getOfferAppiedLineItems": () => (/* binding */ getOfferAppiedLineItems),
/* harmony export */   "getOfferBasedConfig": () => (/* binding */ getOfferBasedConfig),
/* harmony export */   "getOfferDiscountPrice": () => (/* binding */ getOfferDiscountPrice),
/* harmony export */   "getValidInValidConfigDetails": () => (/* binding */ getValidInValidConfigDetails)
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
var getValidInValidConfigDetails = function (configOffers, lineItems) {
    var validConfigList = [];
    var inValidConfigList = [];
    configOffers.forEach(function (config) {
        var lineItemsObj = getLineItemsObj(lineItems);
        var cartType = config.cartType, cartValue = config.cartValue, buyOfferType = config.buyOfferType, buyProducts = config.buyProducts, buyCollections = config.buyCollections, getOfferType = config.getOfferType, discountType = config.discountType, discountValue = config.getProductCount, reccuringFreeProduct = config.reccuringFreeProduct, getProducts = config.getProducts;
        var offerLineItems = [];
        if (buyOfferType === 'products') {
            buyProducts.forEach(function (productDetails) {
                var variantId = productDetails.variantId;
                if (lineItemsObj[variantId]) {
                    offerLineItems = __spreadArray(__spreadArray([], offerLineItems, true), [lineItemsObj[variantId]], false);
                }
            });
        }
        else if (buyOfferType === 'collections') {
            buyCollections.forEach(function (collectionDetails) {
                var collectionId = collectionDetails.collectionId;
                var collectionLineItems = lineItems.filter(function (lineItem) {
                    return collectionId === lineItem.collectionId;
                });
                if (collectionLineItems.length > 0) {
                    offerLineItems = __spreadArray(__spreadArray([], offerLineItems, true), collectionLineItems, true);
                }
            });
        }
        else {
            offerLineItems = lineItems;
        }
        var finalCartValue = cartType === 'amount' ? getCartTotal(offerLineItems) : getCartCount(offerLineItems);
        if (finalCartValue >= cartValue) {
            validConfigList = __spreadArray(__spreadArray([], validConfigList, true), [config], false);
        }
        else {
            inValidConfigList = __spreadArray(__spreadArray([], inValidConfigList, true), [config], false);
        }
    });
    return {
        validConfigList: validConfigList,
        inValidConfigList: inValidConfigList
    };
};
var getCombinedOfferConfig = function (configDetails) {
    return configDetails.reduce(function (combinedDetails, configDetail, index) {
        var combinedOfferConfig = combinedDetails.combinedOfferConfig, nonCombinedOfferConfig = combinedDetails.nonCombinedOfferConfig;
        var combinedOffer = configDetail.combinedOffer;
        if (combinedOffer) {
            return __assign(__assign({}, combinedDetails), { combinedOfferConfig: __spreadArray(__spreadArray([], combinedOfferConfig, true), [__assign(__assign({}, configDetail), { index: index })], false) });
        }
        return __assign(__assign({}, combinedDetails), { nonCombinedOfferConfig: __spreadArray(__spreadArray([], nonCombinedOfferConfig, true), [__assign(__assign({}, configDetail), { index: index })], false) });
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
    }, {
        automaticOffers: [],
        buyXGetY: [],
        percentageDiscount: [],
        flatDiscount: []
    });
};
var getLineItemsObj = function (lineItems) {
    return lineItems.reduce(function (acc, lineItem) {
        var variantId = lineItem.variantId;
        acc[variantId] = lineItem;
        return acc;
    }, {});
};
var getCartTotal = function (lineItems) {
    return lineItems.reduce(function (total, lineItem) {
        var _a = lineItem.originalUnitPrice, originalUnitPrice = _a === void 0 ? 0 : _a, _b = lineItem.quantity, quantity = _b === void 0 ? 0 : _b, _c = lineItem.freeQuantity, freeQuantity = _c === void 0 ? 0 : _c;
        return total + (originalUnitPrice * (quantity - freeQuantity));
    }, 0);
};
var getCartCount = function (lineItems) {
    return lineItems.reduce(function (total, lineItem) {
        var _a = lineItem.quantity, quantity = _a === void 0 ? 0 : _a, _b = lineItem.freeQuantity, freeQuantity = _b === void 0 ? 0 : _b;
        return total + (quantity - freeQuantity);
    }, 0);
};
var getOfferDiscountPrice = function (offerAppliedProducts) {
    return offerAppliedProducts.reduce(function (totalDiscountPrice, productDetails) {
        var _a = productDetails.customAttributes, customAttributes = _a === void 0 ? {} : _a;
        var _b = customAttributes.actualUnitPrice, actualUnitPrice = _b === void 0 ? 0 : _b, _c = customAttributes.discountPrice, discountPrice = _c === void 0 ? 0 : _c, _d = customAttributes.discountQuantity, discountQuantity = _d === void 0 ? 0 : _d, _e = customAttributes.freeQuantity, freeQuantity = _e === void 0 ? 0 : _e;
        return totalDiscountPrice += ((actualUnitPrice * (discountQuantity + freeQuantity)) + discountPrice);
    }, 0);
};
var getOfferAppiedLineItems = function (lineItems) {
    return lineItems.reduce(function (productDetailsObj, lineItem) {
        var _a;
        var variantId = lineItem.variantId, _b = lineItem.customAttributes, customAttributes = _b === void 0 ? {} : _b;
        if (Object.values(customAttributes).length > 0) {
            return __assign(__assign({}, productDetailsObj), (_a = {}, _a[variantId] = lineItem, _a));
        }
        return productDetailsObj;
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
/* harmony import */ var _controller_automaticOffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller/automaticOffer */ "./src/controller/automaticOffer.ts");
/* harmony import */ var _controller_buyXChooseY__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller/buyXChooseY */ "./src/controller/buyXChooseY.ts");
/* harmony import */ var _controller_flatDiscount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller/flatDiscount */ "./src/controller/flatDiscount.ts");
/* harmony import */ var _controller_percentageDiscount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controller/percentageDiscount */ "./src/controller/percentageDiscount.ts");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/common */ "./src/utils/common.ts");
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





var flow = function (appContext, configSchema) {
    var flowObj = {};
    var cartLineItems = appContext.cartLineItems;
    var _a = cartLineItems.lineItems, lineItems = _a === void 0 ? [] : _a;
    var validConfigList = (0,_utils_common__WEBPACK_IMPORTED_MODULE_4__.getValidInValidConfigDetails)(configSchema, lineItems).validConfigList;
    var _b = (0,_utils_common__WEBPACK_IMPORTED_MODULE_4__.getCombinedOfferConfig)(validConfigList), _c = _b.combinedOfferConfig, combinedOfferConfig = _c === void 0 ? [] : _c, _d = _b.nonCombinedOfferConfig, nonCombinedOfferConfig = _d === void 0 ? [] : _d;
    var removedProductDetails = (0,_utils_common__WEBPACK_IMPORTED_MODULE_4__.getOfferAppiedLineItems)(lineItems);
    var allOfferDetails = {};
    if ((combinedOfferConfig === null || combinedOfferConfig === void 0 ? void 0 : combinedOfferConfig.length) > 0) {
        allOfferDetails.combinedOffer = (0,_utils_common__WEBPACK_IMPORTED_MODULE_4__.getOfferBasedConfig)(combinedOfferConfig);
    }
    nonCombinedOfferConfig.forEach(function (configDetails, ind) {
        var newOfferId = (crypto === null || crypto === void 0 ? void 0 : crypto.randomUUID) && (crypto === null || crypto === void 0 ? void 0 : crypto.randomUUID()) || "offer".concat(ind);
        allOfferDetails[newOfferId] = (0,_utils_common__WEBPACK_IMPORTED_MODULE_4__.getOfferBasedConfig)([configDetails]);
    });
    Object.entries(allOfferDetails).forEach(function (_a) {
        var offerId = _a[0], offerDetails = _a[1];
        var offerAppliedProducts = {};
        Object.entries(offerDetails).forEach(function (_a) {
            var offerCategory = _a[0], offerConfigDetails = _a[1];
            if (offerConfigDetails.length === 0)
                return;
            switch (offerCategory) {
                case "automaticOffers":
                    offerAppliedProducts = (0,_controller_automaticOffer__WEBPACK_IMPORTED_MODULE_0__.getAutomaticOfferProducts)(offerConfigDetails, lineItems, offerAppliedProducts);
                    break;
                case "buyXGetY":
                    offerAppliedProducts = (0,_controller_buyXChooseY__WEBPACK_IMPORTED_MODULE_1__.getBuyXChooseYOfferProducts)(offerConfigDetails, lineItems, offerAppliedProducts);
                    break;
                case "percentageDiscount":
                    offerAppliedProducts = (0,_controller_percentageDiscount__WEBPACK_IMPORTED_MODULE_3__.getPercentageOfferProducts)(offerConfigDetails, lineItems, offerAppliedProducts);
                    break;
                case "flatDiscount":
                    offerAppliedProducts = (0,_controller_flatDiscount__WEBPACK_IMPORTED_MODULE_2__.getFlatOfferProducts)(offerConfigDetails, lineItems, offerAppliedProducts);
                    break;
                default:
                    break;
            }
        });
        flowObj[offerId] = offerAppliedProducts;
    });
    var _e = Object.entries(flowObj).reduce(function (offerDetail, _a) {
        var offerId = _a[0], appliedOfferDetails = _a[1];
        var discountPrice = offerDetail.discountPrice;
        var offerDiscountPrice = (0,_utils_common__WEBPACK_IMPORTED_MODULE_4__.getOfferDiscountPrice)(Object.values(appliedOfferDetails));
        if (offerDiscountPrice > discountPrice) {
            return {
                discountPrice: offerDiscountPrice,
                offerAppliedDetails: appliedOfferDetails
            };
        }
        return offerDetail;
    }, {
        discountPrice: 0,
        offerAppliedDetails: {}
    }), discountPrice = _e.discountPrice, offerAppliedDetails = _e.offerAppliedDetails;
    var offerRemovedDetails = Object.keys(removedProductDetails).reduce(function (details, productVariantId) {
        var _a;
        if (offerAppliedDetails[productVariantId])
            return details;
        return __assign(__assign({}, details), (_a = {}, _a[productVariantId] = removedProductDetails[productVariantId], _a));
    }, {});
    // Object.values(offerAppliedDetails).forEach(value => alert(JSON.stringify(value)));
    var finalResult = {
        discountPrice: discountPrice,
        offerAppliedDetails: offerAppliedDetails,
        offerRemovedDetails: offerRemovedDetails
    };
    return finalResult;
};

})();

vajroPlugin = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=vajroPlugin.js.map

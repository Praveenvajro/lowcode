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
/* harmony export */   getAutomaticOfferProducts: () => (/* binding */ getAutomaticOfferProducts)
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
    var freeProductsTargetId = (crypto === null || crypto === void 0 ? void 0 : crypto.randomUUID) && (crypto === null || crypto === void 0 ? void 0 : crypto.randomUUID()) || "freeOfferTarget";
    configOffers.forEach(function (config) {
        var cartType = config.cartType, cartValue = config.cartValue, buyOfferType = config.buyOfferType, buyProducts = config.buyProducts, buyCollections = config.buyCollections, discountValue = config.getProductCount, reccuringFreeProduct = config.reccuringFreeProduct, getProducts = config.getProducts, displayText = config.displayText;
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
            var collectionLineItems = lineItems.filter(function (lineItem) {
                var _a;
                var lineItemCollectionIds = ((_a = lineItem === null || lineItem === void 0 ? void 0 : lineItem.collectionId) === null || _a === void 0 ? void 0 : _a.split(',')) || [];
                return buyCollections.some(function (collectionDetails) {
                    var collectionId = collectionDetails.collectionId;
                    return lineItemCollectionIds.includes(collectionId);
                });
            });
            if (collectionLineItems.length > 0) {
                offerLineItems = __spreadArray(__spreadArray([], offerLineItems, true), collectionLineItems, true);
            }
        }
        else {
            offerLineItems = lineItems;
        }
        var finalCartValue = cartType === 'amount' ? (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.getCartTotal)(offerLineItems) : (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.getCartCount)(offerLineItems);
        if (finalCartValue >= Number(cartValue)) {
            var freebieQuantity_1 = reccuringFreeProduct ? Math.floor(finalCartValue / cartValue) * discountValue : Number(discountValue);
            getProducts.forEach(function (productDetails) {
                var _a, _b;
                var variantId = productDetails.variantId, productId = productDetails.productId, productPrice = productDetails.productPrice;
                var _c = (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.getAppliedProductLineItemHandle)(offerAppliedProducts, variantId), isHaveLineItemHandle = _c.isHaveLineItemHandle, productLineItemHandle = _c.productLineItemHandle;
                var _d = lineItemsObj[variantId] || {}, lineItemHandle = _d.lineItemHandle, _e = _d.quantity, quantity = _e === void 0 ? 0 : _e, _f = _d.customAttributes, lineItemCustomAttributes = _f === void 0 ? {} : _f;
                lineItemHandle ? (productLineItemHandle = lineItemHandle) : null;
                var variantOfferDetails = isHaveLineItemHandle || lineItemHandle ? offerAppliedProducts[productLineItemHandle] : null;
                var _g = lineItemCustomAttributes._vajro_flow, lineItemFlowObj = _g === void 0 ? {} : _g;
                var _vajro_flow = typeof (lineItemFlowObj) === 'string' ? JSON.parse(lineItemFlowObj) : __assign({}, lineItemFlowObj);
                var _h = _vajro_flow._freeQuantity, _freeQuantity = _h === void 0 ? 0 : _h;
                var finalProductQuantity = quantity ? Number(quantity) - Number(_freeQuantity) : 0;
                var _j = variantOfferDetails || {}, _k = _j.customAttributes, _l = _k === void 0 ? {} : _k, _m = _l._vajro_flow, offerAppliedCustomAttributes = _m === void 0 ? {} : _m, _o = _j.displayTextDetails, displayTextDetails = _o === void 0 ? [] : _o;
                if (!!freebieQuantity_1 && variantOfferDetails) {
                    offerAppliedProducts = __assign(__assign({}, offerAppliedProducts), (_a = {}, _a[productLineItemHandle] = __assign(__assign({}, variantOfferDetails), { displayTextDetails: displayTextDetails.includes(displayText) ? displayTextDetails : __spreadArray(__spreadArray([], displayTextDetails, true), [displayText], false), customAttributes: {
                            _vajro_flow: __assign(__assign(__assign({}, _vajro_flow), offerAppliedCustomAttributes), { _productQuantity: finalProductQuantity, _freeQuantity: Number((offerAppliedCustomAttributes === null || offerAppliedCustomAttributes === void 0 ? void 0 : offerAppliedCustomAttributes._freeQuantity) || 0) + freebieQuantity_1 })
                        } }), _a));
                }
                else if (!!freebieQuantity_1) {
                    offerAppliedProducts = __assign(__assign({}, offerAppliedProducts), (_b = {}, _b[productLineItemHandle] = {
                        variantId: variantId,
                        productId: productId,
                        displayTextDetails: [displayText],
                        lineItemHandle: lineItemHandle,
                        customAttributes: {
                            _vajro_flow: __assign(__assign(__assign({}, _vajro_flow), offerAppliedCustomAttributes), { _productQuantity: finalProductQuantity, _actualUnitPrice: Number(productPrice), _freeQuantity: freebieQuantity_1, _productTargetId: freeProductsTargetId })
                        }
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
/* harmony export */   getBuyXChooseYOfferProducts: () => (/* binding */ getBuyXChooseYOfferProducts)
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

var getBuyXChooseYOfferProducts = function (configOffers, lineItems, offerAppliedProducts) {
    var lineItemsObj = (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.getLineItemsObj)(lineItems);
    var freeProductsTargetId = (crypto === null || crypto === void 0 ? void 0 : crypto.randomUUID) && (crypto === null || crypto === void 0 ? void 0 : crypto.randomUUID()) || "freeOfferTarget";
    configOffers.forEach(function (config, index) {
        var discountValue = config.getProductCount, getProducts = config.getProducts, displayText = config.displayText;
        getProducts.forEach(function (productDetails) {
            var _a, _b;
            var variantId = productDetails.variantId, productId = productDetails.productId, productPrice = productDetails.productPrice;
            var _c = (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.getAppliedProductLineItemHandle)(offerAppliedProducts, variantId), isHaveLineItemHandle = _c.isHaveLineItemHandle, productLineItemHandle = _c.productLineItemHandle;
            var _d = lineItemsObj[variantId] || {}, _e = _d.quantity, quantity = _e === void 0 ? 0 : _e, lineItemHandle = _d.lineItemHandle, _f = _d.customAttributes, lineItemCustomAttributes = _f === void 0 ? {} : _f;
            var _g = lineItemCustomAttributes._vajro_flow, lineItemFlowObj = _g === void 0 ? {} : _g;
            var _vajro_flow = typeof (lineItemFlowObj) === 'string' ? JSON.parse(lineItemFlowObj) : __assign({}, lineItemFlowObj);
            var _h = _vajro_flow._freeQuantity, _freeQuantity = _h === void 0 ? 0 : _h;
            var freebieQuantity = (quantity - _freeQuantity) > discountValue ? discountValue : quantity - _freeQuantity;
            var variantOfferDetails = isHaveLineItemHandle ? offerAppliedProducts[productLineItemHandle] : null;
            var _j = variantOfferDetails || {}, _k = _j.customAttributes, _l = _k === void 0 ? {} : _k, _m = _l._vajro_flow, offerAppliedCustomAttributes = _m === void 0 ? {} : _m, _o = _j.displayTextDetails, displayTextDetails = _o === void 0 ? [] : _o;
            if (!!freebieQuantity && variantOfferDetails) {
                offerAppliedProducts = __assign(__assign({}, offerAppliedProducts), (_a = {}, _a[productLineItemHandle] = __assign(__assign({}, variantOfferDetails), { displayTextDetails: displayTextDetails.includes(displayText) ? displayTextDetails : __spreadArray(__spreadArray([], displayTextDetails, true), [displayText], false), customAttributes: {
                        _vajro_flow: __assign(__assign({}, offerAppliedCustomAttributes), { _discountQuantity: freebieQuantity + ((offerAppliedCustomAttributes === null || offerAppliedCustomAttributes === void 0 ? void 0 : offerAppliedCustomAttributes._discountQuantity) || 0), _productTargetId: freeProductsTargetId })
                    } }), _a));
            }
            else if (!!freebieQuantity) {
                offerAppliedProducts = __assign(__assign({}, offerAppliedProducts), (_b = {}, _b[productLineItemHandle] = {
                    variantId: variantId,
                    productId: productId,
                    lineItemHandle: lineItemHandle,
                    displayTextDetails: [displayText],
                    customAttributes: {
                        _vajro_flow: __assign(__assign({}, offerAppliedCustomAttributes), { _productQuantity: quantity - _freeQuantity, _actualUnitPrice: Number(productPrice), _discountQuantity: freebieQuantity, _productTargetId: freeProductsTargetId })
                    }
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
/* harmony export */   getFlatOfferProducts: () => (/* binding */ getFlatOfferProducts)
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
    function getOfferedProductDetails(offerLineItems, displayText, fixedAmount, isSplitNeed, targetId) {
        if (offerLineItems.length === 0)
            return;
        var cartTotal = (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.getCartTotal)(offerLineItems);
        var offerPercentage = (fixedAmount / cartTotal) * 100;
        var finalOfferLineItems = offerLineItems.map(function (offerItem) {
            return __assign(__assign({}, offerItem), { customAttributes: {} });
        });
        offerLineItems.forEach(function (lineItem) {
            var _a;
            var variantId = lineItem.variantId, productId = lineItem.productId, lineItemHandle = lineItem.lineItemHandle, originalUnitPrice = lineItem.originalUnitPrice, _b = lineItem.quantity, quantity = _b === void 0 ? 0 : _b, _c = lineItem.customAttributes, _d = _c === void 0 ? {} : _c, _e = _d._vajro_flow, lineItemFlowObj = _e === void 0 ? {} : _e;
            var _vajro_flow = typeof (lineItemFlowObj) === 'string' ? JSON.parse(lineItemFlowObj) : __assign({}, lineItemFlowObj);
            var _f = _vajro_flow._actualUnitPrice, _actualUnitPrice = _f === void 0 ? originalUnitPrice : _f, _g = _vajro_flow._freeQuantity, _freeQuantity = _g === void 0 ? 0 : _g;
            var variantOfferDetails = appliedProductDetails[lineItemHandle] || {};
            var _h = variantOfferDetails.customAttributes, _j = _h === void 0 ? {} : _h, _k = _j._vajro_flow, offerAppliedCustomAttributes = _k === void 0 ? {} : _k;
            var finalProductQuantity = quantity ? Number(quantity) - Number(_freeQuantity) : 0;
            var unitPriceDiscount = isSplitNeed ? (_actualUnitPrice * (offerPercentage / 100)) : fixedAmount;
            var _l = offerAppliedCustomAttributes._discountQuantity, _discountQuantity = _l === void 0 ? 0 : _l;
            appliedProductDetails = __assign(__assign({}, appliedProductDetails), (_a = {}, _a[lineItemHandle] = __assign(__assign({}, variantOfferDetails), { variantId: variantId, productId: productId, lineItemHandle: lineItemHandle, displayText: displayText, customAttributes: {
                    _vajro_flow: __assign(__assign({}, offerAppliedCustomAttributes), { _actualUnitPrice: Number(_actualUnitPrice), _productQuantity: finalProductQuantity, _discountPrice: unitPriceDiscount >= _actualUnitPrice ? _actualUnitPrice : unitPriceDiscount, _discountQuantity: unitPriceDiscount >= _actualUnitPrice ? finalProductQuantity : _discountQuantity, _offerPercenatage: offerPercentage >= 100 ? 100 : offerPercentage, _amountTargetId: targetId, _flatDiscountDetails: {
                            lineItems: finalOfferLineItems,
                            splitFlatAmount: isSplitNeed,
                            discountValue: fixedAmount,
                            displayText: displayText
                        } })
                } }), _a));
        });
    }
    configOffers.forEach(function (config, index) {
        var amountOfferTargetId = (crypto === null || crypto === void 0 ? void 0 : crypto.randomUUID) && (crypto === null || crypto === void 0 ? void 0 : crypto.randomUUID()) || "amountOffer".concat(index);
        var discountValue = config.discountValue, getOfferType = config.getOfferType, getProducts = config.getProducts, getCollections = config.getCollections, splitFlatAmount = config.splitFlatAmount, displayText = config.displayText;
        var offerLineItems = [];
        if (getOfferType === "products") {
            getProducts.forEach(function (productDetails) {
                var variantId = productDetails.variantId;
                var _a = lineItemsObj[variantId] || {}, _b = _a.quantity, quantity = _b === void 0 ? 0 : _b, _c = _a.customAttributes, _d = _c === void 0 ? {} : _c, _e = _d._vajro_flow, lineItemFlowObj = _e === void 0 ? {} : _e;
                var _vajro_flow = typeof (lineItemFlowObj) === 'string' ? JSON.parse(lineItemFlowObj) : __assign({}, lineItemFlowObj);
                var _f = _vajro_flow._freeQuantity, _freeQuantity = _f === void 0 ? 0 : _f;
                if ((Number(quantity) - Number(_freeQuantity)) > 0) {
                    offerLineItems = __spreadArray(__spreadArray([], offerLineItems, true), [lineItemsObj[variantId]], false);
                }
            });
        }
        else if (getOfferType === "collections") {
            var collectionLineItems = lineItems.filter(function (lineItem) {
                var _a;
                var _b = lineItem.quantity, quantity = _b === void 0 ? 0 : _b, _c = lineItem.customAttributes, _d = _c === void 0 ? {} : _c, _e = _d._vajro_flow, lineItemFlowObj = _e === void 0 ? {} : _e;
                var lineItemCollectionIds = ((_a = lineItem === null || lineItem === void 0 ? void 0 : lineItem.collectionId) === null || _a === void 0 ? void 0 : _a.split(',')) || [];
                var isHaveCollection = getCollections.some(function (collectionDetails) {
                    var collectionId = collectionDetails.collectionId;
                    return (lineItemCollectionIds.includes(collectionId));
                });
                var _vajro_flow = typeof (lineItemFlowObj) === 'string' ? JSON.parse(lineItemFlowObj) : __assign({}, lineItemFlowObj);
                var _f = _vajro_flow._freeQuantity, _freeQuantity = _f === void 0 ? 0 : _f;
                return isHaveCollection && ((Number(quantity) - Number(_freeQuantity)) > 0);
            });
            if (collectionLineItems.length > 0) {
                offerLineItems = __spreadArray(__spreadArray([], offerLineItems, true), collectionLineItems, true);
            }
        }
        else {
            offerLineItems = lineItems.filter(function (lineItem) {
                var _a = lineItem.quantity, quantity = _a === void 0 ? 0 : _a, _b = lineItem.customAttributes, _c = _b === void 0 ? {} : _b, _d = _c._vajro_flow, lineItemFlowObj = _d === void 0 ? {} : _d;
                var _vajro_flow = typeof (lineItemFlowObj) === 'string' ? JSON.parse(lineItemFlowObj) : __assign({}, lineItemFlowObj);
                var _e = _vajro_flow._freeQuantity, _freeQuantity = _e === void 0 ? 0 : _e;
                return (Number(quantity) - Number(_freeQuantity)) > 0;
            });
        }
        var cartTotal = (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.getCartTotal)(offerLineItems);
        var crntAppliedProductDetails = __assign({}, appliedProductDetails);
        offerLineItems = offerLineItems.filter(function (lineItem) {
            var variantId = lineItem.variantId, lineItemHandle = lineItem.lineItemHandle, originalUnitPrice = lineItem.originalUnitPrice, _a = lineItem.customAttributes, _b = _a === void 0 ? {} : _a, _c = _b._vajro_flow, lineItemFlowObj = _c === void 0 ? {} : _c;
            var _vajro_flow = typeof (lineItemFlowObj) === 'string' ? JSON.parse(lineItemFlowObj) : __assign({}, lineItemFlowObj);
            var _d = _vajro_flow._actualUnitPrice, _actualUnitPrice = _d === void 0 ? originalUnitPrice : _d;
            var variantOfferDetails = crntAppliedProductDetails[lineItemHandle] || {};
            var _e = variantOfferDetails.customAttributes, _f = _e === void 0 ? {} : _e, _g = _f._vajro_flow, offerAppliedCustomAttributes = _g === void 0 ? {} : _g;
            var unitPriceDiscount = splitFlatAmount ? (_actualUnitPrice * (discountValue / cartTotal)) : discountValue;
            var _h = offerAppliedCustomAttributes._discountPrice, _discountPrice = _h === void 0 ? 0 : _h, _j = offerAppliedCustomAttributes._flatDiscountDetails, _flatDiscountDetails = _j === void 0 ? {} : _j, _amountTargetId = offerAppliedCustomAttributes._amountTargetId, offerDisplayText = offerAppliedCustomAttributes.displayText;
            var _k = _flatDiscountDetails.lineItems, appliedLineItems = _k === void 0 ? [] : _k, _l = _flatDiscountDetails.splitFlatAmount, issplitFlatAmountApplied = _l === void 0 ? false : _l, _m = _flatDiscountDetails.discountValue, appliedDiscountValue = _m === void 0 ? 0 : _m;
            if (unitPriceDiscount > _discountPrice) {
                var filteredLineItems = appliedLineItems.filter(function (appliedLineItem) { return appliedLineItem.variantId !== variantId; });
                if (issplitFlatAmountApplied && filteredLineItems.length > 0) {
                    getOfferedProductDetails(filteredLineItems, offerDisplayText, appliedDiscountValue, issplitFlatAmountApplied, _amountTargetId);
                }
            }
            return unitPriceDiscount > _discountPrice;
        });
        getOfferedProductDetails(offerLineItems, displayText, discountValue, splitFlatAmount, amountOfferTargetId);
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
/* harmony export */   getPercentageOfferProducts: () => (/* binding */ getPercentageOfferProducts)
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
    configOffers.forEach(function (config, index) {
        var percentageOfferTargetId = (crypto === null || crypto === void 0 ? void 0 : crypto.randomUUID) && (crypto === null || crypto === void 0 ? void 0 : crypto.randomUUID()) || "percentageOffer".concat(index);
        var discountValue = config.discountValue, getOfferType = config.getOfferType, getProducts = config.getProducts, getCollections = config.getCollections, displayText = config.displayText;
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
            var collectionLineItems = lineItems.filter(function (lineItem) {
                var _a;
                var lineItemCollectionIds = ((_a = lineItem === null || lineItem === void 0 ? void 0 : lineItem.collectionId) === null || _a === void 0 ? void 0 : _a.split(',')) || [];
                return getCollections.some(function (collectionDetails) {
                    var collectionId = collectionDetails.collectionId;
                    return lineItemCollectionIds.includes(collectionId);
                });
            });
            if (collectionLineItems.length > 0) {
                offerLineItems = __spreadArray(__spreadArray([], offerLineItems, true), collectionLineItems, true);
            }
        }
        else {
            offerLineItems = __spreadArray([], lineItems, true);
        }
        offerLineItems.forEach(function (lineItem) {
            var _a;
            var variantId = lineItem.variantId, productId = lineItem.productId, lineItemHandle = lineItem.lineItemHandle, originalUnitPrice = lineItem.originalUnitPrice, _b = lineItem.quantity, quantity = _b === void 0 ? 0 : _b, _c = lineItem.customAttributes, lineItemCustomAttributes = _c === void 0 ? {} : _c;
            var _d = lineItemCustomAttributes._vajro_flow, lineItemFlowObj = _d === void 0 ? {} : _d;
            var _vajro_flow = typeof (lineItemFlowObj) === 'string' ? JSON.parse(lineItemFlowObj) : __assign({}, lineItemFlowObj);
            var _e = _vajro_flow._actualUnitPrice, _actualUnitPrice = _e === void 0 ? originalUnitPrice : _e, _f = _vajro_flow._freeQuantity, _freeQuantity = _f === void 0 ? 0 : _f;
            var variantOfferDetails = offerAppliedProducts[lineItemHandle] || {};
            var _g = variantOfferDetails.customAttributes, _h = _g === void 0 ? {} : _g, _j = _h._vajro_flow, offerAppliedCustomAttributes = _j === void 0 ? {} : _j;
            var finalProductQuantity = quantity ? Number(quantity) - Number(_freeQuantity) : 0;
            var unitPriceDiscount = _actualUnitPrice * (discountValue / 100);
            var _k = offerAppliedCustomAttributes._discountPrice, _discountPrice = _k === void 0 ? 0 : _k, _l = offerAppliedCustomAttributes._discountQuantity, _discountQuantity = _l === void 0 ? 0 : _l;
            if (unitPriceDiscount > _discountPrice && finalProductQuantity > 0) {
                offerAppliedProducts = __assign(__assign({}, offerAppliedProducts), (_a = {}, _a[lineItemHandle] = __assign(__assign({}, variantOfferDetails), { variantId: variantId, productId: productId, lineItemHandle: lineItemHandle, displayText: displayText, customAttributes: {
                        _vajro_flow: __assign(__assign({}, offerAppliedCustomAttributes), { _actualUnitPrice: Number(_actualUnitPrice), _discountPrice: unitPriceDiscount, _productQuantity: finalProductQuantity, _discountQuantity: unitPriceDiscount === _actualUnitPrice ? finalProductQuantity : _discountQuantity, _offerPercenatage: discountValue >= 100 ? 100 : discountValue, _percentageTargetId: percentageOfferTargetId })
                    } }), _a));
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
/* harmony export */   constructDisplayTextHtml: () => (/* binding */ constructDisplayTextHtml),
/* harmony export */   getAppliedProductLineItemHandle: () => (/* binding */ getAppliedProductLineItemHandle),
/* harmony export */   getCartCount: () => (/* binding */ getCartCount),
/* harmony export */   getCartTotal: () => (/* binding */ getCartTotal),
/* harmony export */   getCombinedOfferConfig: () => (/* binding */ getCombinedOfferConfig),
/* harmony export */   getLineItemsObj: () => (/* binding */ getLineItemsObj),
/* harmony export */   getOfferAppiedLineItems: () => (/* binding */ getOfferAppiedLineItems),
/* harmony export */   getOfferBasedConfig: () => (/* binding */ getOfferBasedConfig),
/* harmony export */   getOfferDiscountPrice: () => (/* binding */ getOfferDiscountPrice),
/* harmony export */   getValidInValidConfigDetails: () => (/* binding */ getValidInValidConfigDetails)
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
            var collectionLineItems = lineItems.filter(function (lineItem) {
                var _a;
                var lineItemCollectionIds = ((_a = lineItem === null || lineItem === void 0 ? void 0 : lineItem.collectionId) === null || _a === void 0 ? void 0 : _a.split(',')) || [];
                return buyCollections.some(function (collectionDetails) {
                    var collectionId = collectionDetails.collectionId;
                    return lineItemCollectionIds.includes(collectionId);
                });
            });
            if (collectionLineItems.length > 0) {
                offerLineItems = __spreadArray(__spreadArray([], offerLineItems, true), collectionLineItems, true);
            }
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
var getAppliedProductLineItemHandle = function (offerAppliedProducts, crntVariantId) {
    var productLineItemHandle = "tempHandle".concat(Math.floor(Math.random() * 1000000));
    var handleDetails = {
        isHaveLineItemHandle: false,
        productLineItemHandle: productLineItemHandle
    };
    Object.entries(offerAppliedProducts).forEach(function (_a) {
        var handleId = _a[0], offerDetails = _a[1];
        var isHaveLineItemHandle = handleDetails.isHaveLineItemHandle;
        var variantId = offerDetails.variantId;
        if (!isHaveLineItemHandle && crntVariantId === variantId) {
            handleDetails = {
                isHaveLineItemHandle: true,
                productLineItemHandle: handleId
            };
        }
    });
    return handleDetails;
};
var getCartTotal = function (lineItems) {
    return lineItems.reduce(function (total, lineItem) {
        var _a = lineItem.originalUnitPrice, originalUnitPrice = _a === void 0 ? 0 : _a, _b = lineItem.quantity, quantity = _b === void 0 ? 0 : _b, _c = lineItem.customAttributes, customAttributes = _c === void 0 ? {} : _c;
        var _d = customAttributes._vajro_flow, lineItemFlowObj = _d === void 0 ? {} : _d;
        var _vajro_flow = typeof (lineItemFlowObj) === 'string' ? JSON.parse(lineItemFlowObj) : __assign({}, lineItemFlowObj);
        var _e = _vajro_flow || {}, _f = _e._actualUnitPrice, _actualUnitPrice = _f === void 0 ? originalUnitPrice : _f, _g = _e._discountQuantity, _discountQuantity = _g === void 0 ? 0 : _g, _h = _e._freeQuantity, _freeQuantity = _h === void 0 ? 0 : _h;
        return total + (_actualUnitPrice * (quantity - (Number(_freeQuantity) + Number(_discountQuantity))));
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
        var _b = customAttributes._vajro_flow, lineItemFlowObj = _b === void 0 ? {} : _b;
        var _vajro_flow = typeof (lineItemFlowObj) === 'string' ? JSON.parse(lineItemFlowObj) : __assign({}, lineItemFlowObj);
        var _c = _vajro_flow._actualUnitPrice, _actualUnitPrice = _c === void 0 ? 0 : _c, _d = _vajro_flow._discountPrice, _discountPrice = _d === void 0 ? 0 : _d, _e = _vajro_flow._discountQuantity, _discountQuantity = _e === void 0 ? 0 : _e, _f = _vajro_flow._freeQuantity, _freeQuantity = _f === void 0 ? 0 : _f, _g = _vajro_flow._productQuantity, _productQuantity = _g === void 0 ? 0 : _g;
        return totalDiscountPrice += ((Number(_actualUnitPrice) * (Number(_discountQuantity) + Number(_freeQuantity))) + (Number(_discountPrice) * Number(_productQuantity)));
    }, 0);
};
var getOfferAppiedLineItems = function (lineItems) {
    return lineItems.reduce(function (productDetailsObj, lineItem) {
        var _a;
        var lineItemHandle = lineItem.lineItemHandle, _b = lineItem.customAttributes, customAttributes = _b === void 0 ? {} : _b;
        var _c = customAttributes._vajro_flow, lineItemFlowObj = _c === void 0 ? {} : _c;
        var _vajro_flow = typeof (lineItemFlowObj) === 'string' ? JSON.parse(lineItemFlowObj) : __assign({}, lineItemFlowObj);
        if (Object.keys(_vajro_flow).indexOf('_actualUnitPrice') !== -1) {
            return __assign(__assign({}, productDetailsObj), (_a = {}, _a[lineItemHandle] = __assign(__assign({}, lineItem), { customAttributes: __assign(__assign({}, customAttributes), { _vajro_flow: _vajro_flow }) }), _a));
        }
        return productDetailsObj;
    }, {});
};
var constructDisplayTextHtml = function (displayTextArray) {
    if (displayTextArray.length === 0)
        return '';
    var textContent = displayTextArray.map(function (text) {
        return "<p style=\"text-align: center;font-size: 12px\"><b>".concat(text, "</b></p>");
    }).join('');
    return "<!DOCTYPE html>\n\t<html lang=\"en\">\n\t\t<head>\n\t\t\t<meta charset=\"UTF-8\" />\n\t\t\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\t\t\t<meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\" />\n\t\t</head>\n\t\t<body style=\"min-width: auto; min-height: auto; font-family: -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Helvetica Neue, sans-serif !important;\">\n            ".concat(textContent, "\n\t\t</body>\n\t</html>");
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
/* harmony export */   flow: () => (/* binding */ flow)
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
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};





var flow = function (appContext, configSchema) {
    alert('Calling');
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
        var displayTextArray = [];
        Object.values(offerAppliedProducts).forEach(function (productDetails) {
            var _a = productDetails.displayTextDetails, displayTextDetails = _a === void 0 ? [] : _a, _b = productDetails.displayText, displayText = _b === void 0 ? '' : _b;
            __spreadArray(__spreadArray([], displayTextDetails, true), [displayText], false).forEach(function (textContent) {
                if (!displayTextArray.includes(textContent) && textContent) {
                    displayTextArray = __spreadArray(__spreadArray([], displayTextArray, true), [textContent], false);
                }
            });
        });
        flowObj[offerId] = {
            offerAppliedProducts: offerAppliedProducts,
            displayTextArray: displayTextArray
        };
    });
    var _e = Object.entries(flowObj).reduce(function (offerDetail, _a) {
        var offerId = _a[0], appliedOfferDetails = _a[1];
        var discountPrice = offerDetail.discountPrice;
        var offerAppliedProducts = appliedOfferDetails.offerAppliedProducts, displayTextArray = appliedOfferDetails.displayTextArray;
        var offerDiscountPrice = (0,_utils_common__WEBPACK_IMPORTED_MODULE_4__.getOfferDiscountPrice)(Object.values(offerAppliedProducts));
        if (offerDiscountPrice >= discountPrice) {
            return {
                discountPrice: offerDiscountPrice,
                offerAppliedDetails: offerAppliedProducts,
                displayTextArray: displayTextArray
            };
        }
        return offerDetail;
    }, {
        discountPrice: 0,
        offerAppliedDetails: {},
        displayTextArray: []
    }), discountPrice = _e.discountPrice, offerAppliedDetails = _e.offerAppliedDetails, displayTextArray = _e.displayTextArray;
    var displayTextHtml = (0,_utils_common__WEBPACK_IMPORTED_MODULE_4__.constructDisplayTextHtml)(displayTextArray);
    var offerRemovedDetails = Object.keys(removedProductDetails).reduce(function (details, productHandleId) {
        var _a;
        if (offerAppliedDetails[productHandleId])
            return details;
        return __assign(__assign({}, details), (_a = {}, _a[productHandleId] = removedProductDetails[productHandleId], _a));
    }, {});
    var finalResult = {
        discountPrice: discountPrice,
        offerAppliedDetails: offerAppliedDetails,
        offerRemovedDetails: offerRemovedDetails,
        displayTextHtml: displayTextHtml
    };
    alert(JSON.stringify({ finalResult: finalResult }));
    return finalResult;
};

})();

vajroPlugin = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=vajroPlugin.js.map

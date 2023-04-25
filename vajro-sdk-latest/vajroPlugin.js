var vajroPlugin;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controller/flow-category.controller.ts":
/*!****************************************************!*\
  !*** ./src/controller/flow-category.controller.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findOfferCategory": () => (/* binding */ findOfferCategory)
/* harmony export */ });
/* harmony import */ var _service_flow_core_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/flow-core.service */ "./src/service/flow-core.service.ts");

var findOfferCategory = function (data) {
    var offerCategory = data.offerCategory;
    switch (offerCategory) {
        case "percentageDiscount":
        case "flatDiscount":
            return (0,_service_flow_core_service__WEBPACK_IMPORTED_MODULE_0__.findPercentageAmountDiscounts)(data);
        case "buyXGetY":
            return (0,_service_flow_core_service__WEBPACK_IMPORTED_MODULE_0__.findBuyXChooseYDiscounts)(data);
        case "automaticOffers":
            return (0,_service_flow_core_service__WEBPACK_IMPORTED_MODULE_0__.findBuyXGetYDiscounts)(data);
        default:
            return {};
    }
};


/***/ }),

/***/ "./src/service/flow-apply.service.ts":
/*!*******************************************!*\
  !*** ./src/service/flow-apply.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "afterDiscountCalcCartTotal": () => (/* binding */ afterDiscountCalcCartTotal),
/* harmony export */   "applyBuyXChooseYDiscount": () => (/* binding */ applyBuyXChooseYDiscount),
/* harmony export */   "applyBuyXGetYDiscount": () => (/* binding */ applyBuyXGetYDiscount),
/* harmony export */   "applyFreeDiscount": () => (/* binding */ applyFreeDiscount),
/* harmony export */   "applyPercentageAndAmountDiscount": () => (/* binding */ applyPercentageAndAmountDiscount),
/* harmony export */   "applyPercentageAndAmountOffer": () => (/* binding */ applyPercentageAndAmountOffer)
/* harmony export */ });
/* harmony import */ var _utils_flow_common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/flow-common.utils */ "./src/utils/flow-common.utils.ts");
/* harmony import */ var _utils_flow_helper_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/flow-helper.utils */ "./src/utils/flow-helper.utils.ts");


var applyPercentageAndAmountDiscount = function (data) {
    var offerCategory = data.offerCategory, discountType = data.discountType, discountValue = data.discountValue, lineItems = data.lineItems, customGetProduct = data.customGetProduct, customGetCollection = data.customGetCollection, customBuyCollection = data.customBuyCollection, customBuyProduct = data.customBuyProduct;
    var getCombinedArray = (0,_utils_flow_helper_utils__WEBPACK_IMPORTED_MODULE_1__.combineSchemaOfferArray)({
        customBuyCollection: customBuyCollection,
        customGetCollection: customGetCollection,
        customBuyProduct: customBuyProduct,
        customGetProduct: customGetProduct
    });
    var sanitizedLineItem = customGetProduct.length <= 0 && customGetCollection.length <= 0
        ? lineItems
        : getCombinedArray;
    var cartTotal = customGetProduct.length <= 0 && customGetCollection.length <= 0
        ? (0,_utils_flow_helper_utils__WEBPACK_IMPORTED_MODULE_1__.findOverAllCartTotal)(sanitizedLineItem)
        : (0,_utils_flow_helper_utils__WEBPACK_IMPORTED_MODULE_1__.findUserProductCartTotal)({ sanitizedLineItem: sanitizedLineItem, lineItems: lineItems });
    var percentageDiscountValue = discountType === "percentage" && discountValue >= 100 ? 100 : discountValue;
    var getOffer = [];
    sanitizedLineItem.forEach(function (key) {
        if (typeof key === "string") {
            lineItems.forEach(function (lineItem) {
                var _a = lineItem || {}, collectionId = _a.collectionId, variantId = _a.variantId;
                if (variantId === key || collectionId === key) {
                    var value = applyPercentageAndAmountOffer(offerCategory, lineItem, discountType, discountValue, percentageDiscountValue, cartTotal);
                    getOffer.push(value);
                }
            });
        }
        else {
            var value = applyPercentageAndAmountOffer(offerCategory, key, discountType, discountValue, percentageDiscountValue, cartTotal);
            getOffer.push(value);
        }
    });
    return getOffer;
};
var applyBuyXChooseYDiscount = function (data) {
    var offerCategory = data.offerCategory, getProducts = data.getProducts, customGetProduct = data.customGetProduct, lineItems = data.lineItems, getProductCount = data.getProductCount;
    var sanitizedLineItem = (0,_utils_flow_common_utils__WEBPACK_IMPORTED_MODULE_0__.getLineItemsObj)(lineItems);
    var filterGetProduct = customGetProduct.filter(function (id) { return sanitizedLineItem[id]; });
    var sortFilteredArray = filterGetProduct.sort(function (start, next) {
        return sanitizedLineItem[start].unitPrice - sanitizedLineItem[next].unitPrice;
    });
    var getOffer = [];
    var localProductCountTrack = getProductCount;
    sortFilteredArray.forEach(function (id, index) {
        var _a, _b, _c;
        if (localProductCountTrack) {
            var isGetProductIdInLineitem = sanitizedLineItem[id] ? true : false;
            var _d = sanitizedLineItem[id] || {}, productId = _d.productId, variantId = _d.variantId, quantity = _d.quantity, unitPrice = _d.unitPrice, lineItemHandle = _d.lineItemHandle;
            var customFreeQuantity = localProductCountTrack > quantity ? quantity : localProductCountTrack;
            localProductCountTrack -= quantity;
            if (localProductCountTrack < 0)
                localProductCountTrack = 0;
            var getFreeOfferValue = applyFreeDiscount({
                productId: productId,
                variantId: variantId,
                lineItemHandle: lineItemHandle,
                quantity: quantity,
                getProductCount: customFreeQuantity,
                unitPrice: unitPrice,
                offerCategory: offerCategory,
                customGetProductId: (_a = getProducts[index]) === null || _a === void 0 ? void 0 : _a.productId,
                customGetVariantId: (_b = getProducts[index]) === null || _b === void 0 ? void 0 : _b.variantId,
                customGetProductPrice: (_c = getProducts[index]) === null || _c === void 0 ? void 0 : _c.productPrice,
                isGetProductIdInLineitem: isGetProductIdInLineitem
            });
            getOffer.push(getFreeOfferValue);
        }
    });
    return getOffer;
};
var applyBuyXGetYDiscount = function (data) {
    var offerCategory = data.offerCategory, _a = data.getProducts, getProducts = _a === void 0 ? [] : _a, customGetProduct = data.customGetProduct, lineItems = data.lineItems, getProductCount = data.getProductCount;
    var sanitizedLineItem = (0,_utils_flow_common_utils__WEBPACK_IMPORTED_MODULE_0__.getLineItemsObj)(lineItems);
    var getOffer = [];
    customGetProduct.forEach(function (id, index) {
        var _a, _b, _c;
        var isGetProductIdInLineitem = sanitizedLineItem[id] ? true : false;
        var _d = sanitizedLineItem[id] || {}, productId = _d.productId, variantId = _d.variantId, quantity = _d.quantity, unitPrice = _d.unitPrice, lineItemHandle = _d.lineItemHandle;
        var getFreeOfferValue = applyFreeDiscount({
            productId: productId,
            variantId: variantId,
            lineItemHandle: lineItemHandle,
            quantity: quantity,
            getProductCount: getProductCount,
            unitPrice: unitPrice,
            offerCategory: offerCategory,
            customGetProductId: (_a = getProducts[index]) === null || _a === void 0 ? void 0 : _a.productId,
            customGetVariantId: (_b = getProducts[index]) === null || _b === void 0 ? void 0 : _b.variantId,
            customGetProductPrice: (_c = getProducts[index]) === null || _c === void 0 ? void 0 : _c.productPrice,
            isGetProductIdInLineitem: isGetProductIdInLineitem
        });
        getOffer.push(getFreeOfferValue);
    });
    return getOffer;
};
var applyPercentageAndAmountOffer = function (offerCategory, lineItem, discountType, discountValue, percentageDiscountValue, cartTotal) {
    var _a = lineItem || {}, unitPrice = _a.unitPrice, quantity = _a.quantity, variantId = _a.variantId, productId = _a.productId, lineItemHandle = _a.lineItemHandle;
    if (discountType === "percentage") {
        var getEditedPrice = quantity * unitPrice - quantity * unitPrice * (percentageDiscountValue / 100);
        return {
            productId: productId,
            variantId: variantId,
            quantity: quantity,
            unitPrice: getEditedPrice / quantity,
            lineItemHandle: lineItemHandle,
            discountType: offerCategory,
            discountValue: "",
            customLineItemType: "REGULAR"
        };
    }
    if (discountType === "amount") {
        var getPercentage = ((quantity * unitPrice) / cartTotal) * 100;
        var getPercentageAmount = (getPercentage / 100) * discountValue;
        var getEditedPrice = quantity * unitPrice >= getPercentageAmount
            ? quantity * unitPrice - getPercentageAmount
            : 0;
        var finalAmount = getEditedPrice !== 0 ? getEditedPrice / quantity : 0;
        return {
            productId: productId,
            variantId: variantId,
            quantity: quantity,
            unitPrice: finalAmount,
            lineItemHandle: lineItemHandle,
            discountType: offerCategory,
            discountValue: "",
            customLineItemType: "REGULAR"
        };
    }
    return {};
};
var applyFreeDiscount = function (data) {
    var productId = data.productId, variantId = data.variantId, lineItemHandle = data.lineItemHandle, unitPrice = data.unitPrice, offerCategory = data.offerCategory, getProductCount = data.getProductCount, customGetProductId = data.customGetProductId, customGetVariantId = data.customGetVariantId, isGetProductIdInLineitem = data.isGetProductIdInLineitem, _a = data.quantity, quantity = _a === void 0 ? getProductCount : _a, customGetProductPrice = data.customGetProductPrice;
    var customFreeQuantity = isGetProductIdInLineitem && getProductCount > quantity ? getProductCount : quantity;
    var customUnitPrice = customFreeQuantity === getProductCount ? 0 : unitPrice;
    var customDiscountType = customFreeQuantity >= getProductCount ? offerCategory : "";
    var offerValue = {
        productId: productId || customGetProductId,
        variantId: variantId || customGetVariantId,
        quantity: customFreeQuantity,
        freeQuantity: getProductCount,
        unitPrice: customUnitPrice,
        lineItemHandle: lineItemHandle,
        discountType: customDiscountType,
        discountValue: "",
        customLineItemType: "REGULAR",
        isGetProductIdInLineitem: isGetProductIdInLineitem,
        customGetProductPrice: customGetProductPrice
    };
    return offerValue;
};
var afterDiscountCalcCartTotal = function (lineItems, getDiscoutOffer, offerCategory) {
    if (offerCategory !== "automaticOffers") {
        var sanitizedLineItem_1 = (0,_utils_flow_common_utils__WEBPACK_IMPORTED_MODULE_0__.getLineItemsObj)(getDiscoutOffer);
        return lineItems.reduce(function (acc, lineItem) {
            var variantId = lineItem.variantId, actualUnitPrice = lineItem.unitPrice, actualQuantity = lineItem.quantity;
            var _a = sanitizedLineItem_1[variantId] || {}, offerAppliesUnitPrice = _a.unitPrice, offerAppliesQuantity = _a.quantity, _b = _a.freeQuantity, freeQuantity = _b === void 0 ? 0 : _b;
            var finalUnitPrice = offerAppliesUnitPrice || offerAppliesUnitPrice === 0
                ? offerAppliesUnitPrice
                : actualUnitPrice;
            var localQuantity = offerAppliesQuantity || actualQuantity;
            var finalQuantity = localQuantity - freeQuantity;
            return (acc += finalUnitPrice * finalQuantity);
        }, 0);
    }
    else {
        var currentLineItemTotal = (0,_utils_flow_helper_utils__WEBPACK_IMPORTED_MODULE_1__.findOverAllCartTotal)(lineItems);
        var offerLineItemTotal = (0,_utils_flow_helper_utils__WEBPACK_IMPORTED_MODULE_1__.findOfferLineItemTotal)(getDiscoutOffer);
        var buyXGetYTotal = currentLineItemTotal > offerLineItemTotal
            ? currentLineItemTotal - offerLineItemTotal
            : currentLineItemTotal;
        return buyXGetYTotal;
    }
};


/***/ }),

/***/ "./src/service/flow-core.service.ts":
/*!******************************************!*\
  !*** ./src/service/flow-core.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findBuyXChooseYDiscounts": () => (/* binding */ findBuyXChooseYDiscounts),
/* harmony export */   "findBuyXGetYDiscounts": () => (/* binding */ findBuyXGetYDiscounts),
/* harmony export */   "findPercentageAmountDiscounts": () => (/* binding */ findPercentageAmountDiscounts)
/* harmony export */ });
/* harmony import */ var _utils_flow_common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/flow-common.utils */ "./src/utils/flow-common.utils.ts");
/* harmony import */ var _utils_flow_helper_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/flow-helper.utils */ "./src/utils/flow-helper.utils.ts");
/* harmony import */ var _flow_apply_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flow-apply.service */ "./src/service/flow-apply.service.ts");



var findPercentageAmountDiscounts = function (data) {
    var getRemovedProductList = data.getRemovedProductList, lineItems = data.lineItems, buyOfferType = data.buyOfferType, customGetProduct = data.customGetProduct, customGetCollection = data.customGetCollection, _a = data.displayText, displayText = _a === void 0 ? "" : _a, getConfigSchema = data.getConfigSchema, offerCategory = data.offerCategory;
    var isValidInput = buyOfferType !== "overAll" ? (0,_utils_flow_helper_utils__WEBPACK_IMPORTED_MODULE_1__.validateInputData)(data) : false;
    var buyArrayAvaliable = buyOfferType !== "overAll" &&
        (customGetProduct.length > 0 || customGetCollection.length > 0)
        ? (0,_utils_flow_helper_utils__WEBPACK_IMPORTED_MODULE_1__.validateBuyArrayAvaliable)(data)
        : true;
    var getArrayAvaliable = buyOfferType !== "overAll" &&
        (customGetProduct.length > 0 || customGetCollection.length > 0)
        ? (0,_utils_flow_helper_utils__WEBPACK_IMPORTED_MODULE_1__.validateGetArrayAvaliable)(data)
        : true;
    var isOverAllGetLevelValid = buyOfferType === "overAll" &&
        (customGetProduct.length > 0 || customGetCollection.length > 0)
        ? (0,_utils_flow_helper_utils__WEBPACK_IMPORTED_MODULE_1__.validateGetArrayAvaliable)(data)
        : true;
    var isOverAllValid = buyOfferType === "overAll" && isOverAllGetLevelValid ? (0,_utils_flow_helper_utils__WEBPACK_IMPORTED_MODULE_1__.validateOverAllData)(data) : false;
    var getDiscoutOffer = (isOverAllValid || isValidInput) && buyArrayAvaliable && getArrayAvaliable
        ? (0,_flow_apply_service__WEBPACK_IMPORTED_MODULE_2__.applyPercentageAndAmountDiscount)(data)
        : [];
    var displayTextHtmlBuilder = getDiscoutOffer.length > 0 && displayText.length > 0
        ? (0,_utils_flow_common_utils__WEBPACK_IMPORTED_MODULE_0__.constructDisplayTextHtmlBuilder)(displayText)
        : "";
    var totalCartValue = getDiscoutOffer.length > 0
        ? (0,_flow_apply_service__WEBPACK_IMPORTED_MODULE_2__.afterDiscountCalcCartTotal)(lineItems, getDiscoutOffer, offerCategory)
        : 0;
    var offerApplied = getDiscoutOffer.length > 0 ? true : false;
    return {
        offerApplied: offerApplied,
        output: getDiscoutOffer,
        getRemovedProductList: getRemovedProductList,
        displayText: displayTextHtmlBuilder,
        totalCartValue: totalCartValue,
        schema: getConfigSchema
    };
};
var findBuyXChooseYDiscounts = function (data) {
    var getRemovedProductList = data.getRemovedProductList, getConfigSchema = data.getConfigSchema, lineItems = data.lineItems, displayText = data.displayText, offerCategory = data.offerCategory;
    var isValidInput = (0,_utils_flow_helper_utils__WEBPACK_IMPORTED_MODULE_1__.buyXChooseYInputValidation)(data);
    var isGetProductValid = (0,_utils_flow_helper_utils__WEBPACK_IMPORTED_MODULE_1__.validateGetProductCount)(data);
    var getDiscoutOffer = isValidInput && isGetProductValid ? (0,_flow_apply_service__WEBPACK_IMPORTED_MODULE_2__.applyBuyXChooseYDiscount)(data) : [];
    var displayTextHtmlBuilder = getDiscoutOffer.length > 0 && displayText.length > 0
        ? (0,_utils_flow_common_utils__WEBPACK_IMPORTED_MODULE_0__.constructDisplayTextHtmlBuilder)(displayText)
        : "";
    var totalCartValue = getDiscoutOffer.length > 0
        ? (0,_flow_apply_service__WEBPACK_IMPORTED_MODULE_2__.afterDiscountCalcCartTotal)(lineItems, getDiscoutOffer, offerCategory)
        : 0;
    var offerApplied = getDiscoutOffer.length > 0 ? true : false;
    return {
        offerApplied: offerApplied,
        output: getDiscoutOffer,
        getRemovedProductList: getRemovedProductList,
        displayText: displayTextHtmlBuilder,
        totalCartValue: totalCartValue,
        schema: getConfigSchema
    };
};
var findBuyXGetYDiscounts = function (data) {
    var getRemovedProductList = data.getRemovedProductList, getConfigSchema = data.getConfigSchema, lineItems = data.lineItems, displayText = data.displayText, offerCategory = data.offerCategory;
    var isValidInput = (0,_utils_flow_helper_utils__WEBPACK_IMPORTED_MODULE_1__.buyXChooseYInputValidation)(data);
    var getDiscoutOffer = isValidInput ? (0,_flow_apply_service__WEBPACK_IMPORTED_MODULE_2__.applyBuyXGetYDiscount)(data) : [];
    var displayTextHtmlBuilder = getDiscoutOffer.length > 0 && displayText.length > 0
        ? (0,_utils_flow_common_utils__WEBPACK_IMPORTED_MODULE_0__.constructDisplayTextHtmlBuilder)(displayText)
        : "";
    var totalCartValue = getDiscoutOffer.length > 0
        ? (0,_flow_apply_service__WEBPACK_IMPORTED_MODULE_2__.afterDiscountCalcCartTotal)(lineItems, getDiscoutOffer, offerCategory)
        : 0;
    var offerApplied = getDiscoutOffer.length > 0 ? true : false;
    return {
        offerApplied: offerApplied,
        output: getDiscoutOffer,
        getRemovedProductList: getRemovedProductList,
        displayText: displayTextHtmlBuilder,
        totalCartValue: totalCartValue,
        schema: getConfigSchema
    };
};


/***/ }),

/***/ "./src/utils/flow-common.utils.ts":
/*!****************************************!*\
  !*** ./src/utils/flow-common.utils.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildInputData": () => (/* binding */ buildInputData),
/* harmony export */   "constructDisplayTextHtmlBuilder": () => (/* binding */ constructDisplayTextHtmlBuilder),
/* harmony export */   "getLineItemsObj": () => (/* binding */ getLineItemsObj),
/* harmony export */   "resetInputLineItem": () => (/* binding */ resetInputLineItem),
/* harmony export */   "schemaReBuilder": () => (/* binding */ schemaReBuilder)
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
var schemaReBuilder = function (configSchema) {
    var _a = configSchema.buyCollections, buyCollections = _a === void 0 ? [] : _a, _b = configSchema.getCollections, getCollections = _b === void 0 ? [] : _b, _c = configSchema.buyProducts, buyProducts = _c === void 0 ? [] : _c, _d = configSchema.getProducts, getProducts = _d === void 0 ? [] : _d, getProductCount = configSchema.getProductCount;
    var buyVariantIdList = buyProducts.map(function (product) { return product.variantId; });
    configSchema.customBuyProduct = buyVariantIdList;
    var getVariantIdList = getProducts.map(function (product) { return product.variantId; });
    configSchema.customGetProduct = getVariantIdList;
    var buyCollectionIdList = buyCollections.map(function (collection) { return collection.collectionId; });
    configSchema.customBuyCollection = buyCollectionIdList;
    var getCollectionIdList = getCollections.map(function (collection) { return collection.collectionId; });
    configSchema.customGetCollection = getCollectionIdList;
    if (!getProductCount)
        configSchema.getProductCount = 0;
    return configSchema;
};
var buildInputData = function (getConfigSchema, lineItems) {
    var modifiedLineItem = resetInputLineItem(lineItems);
    var config = __assign(__assign({ getConfigSchema: getConfigSchema }, getConfigSchema), { lineItems: modifiedLineItem, getRemovedProductList: modifiedLineItem });
    return config;
};
var resetInputLineItem = function (lineItems) {
    return lineItems.map(function (lineItem) {
        var originalUnitPrice = lineItem.originalUnitPrice;
        lineItem.unitPrice = originalUnitPrice;
        return lineItem;
    });
};
var getLineItemsObj = function (lineItems) {
    return lineItems.reduce(function (acc, lineItem) {
        var variantId = lineItem.variantId;
        acc[variantId] = lineItem;
        return acc;
    }, {});
};
var constructDisplayTextHtmlBuilder = function (displayText) {
    return "<!DOCTYPE html>\n\t<html lang=\"en\">\n\t\t<head>\n\t\t\t<meta charset=\"UTF-8\" />\n\t\t\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\t\t\t<meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\" />\n\t\t</head>\n\t\t<body style=\"min-width: auto; min-height: auto\">\n\t\t\t<h2 style=\"text-align: center;\"><b>".concat(displayText, "</b></h2>\n\t\t</body>\n\t</html>");
};


/***/ }),

/***/ "./src/utils/flow-helper.utils.ts":
/*!****************************************!*\
  !*** ./src/utils/flow-helper.utils.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buyXChooseYInputValidation": () => (/* binding */ buyXChooseYInputValidation),
/* harmony export */   "combineBuyConfigArrays": () => (/* binding */ combineBuyConfigArrays),
/* harmony export */   "combineSchemaOfferArray": () => (/* binding */ combineSchemaOfferArray),
/* harmony export */   "findOfferLineItemTotal": () => (/* binding */ findOfferLineItemTotal),
/* harmony export */   "findOverAllCartTotal": () => (/* binding */ findOverAllCartTotal),
/* harmony export */   "findUserProductCartTotal": () => (/* binding */ findUserProductCartTotal),
/* harmony export */   "validateBuyArrayAvaliable": () => (/* binding */ validateBuyArrayAvaliable),
/* harmony export */   "validateGetArrayAvaliable": () => (/* binding */ validateGetArrayAvaliable),
/* harmony export */   "validateGetProductCount": () => (/* binding */ validateGetProductCount),
/* harmony export */   "validateInputData": () => (/* binding */ validateInputData),
/* harmony export */   "validateOverAllData": () => (/* binding */ validateOverAllData)
/* harmony export */ });
/* harmony import */ var _flow_common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flow-common.utils */ "./src/utils/flow-common.utils.ts");

var combineBuyConfigArrays = function (data) {
    var customBuyCollection = data.customBuyCollection, customBuyProduct = data.customBuyProduct;
    return customBuyProduct.length > 0 || customBuyCollection.length > 0
        ? customBuyProduct.concat(customBuyCollection)
        : [];
};
var combineSchemaOfferArray = function (data) {
    var customBuyCollection = data.customBuyCollection, customGetCollection = data.customGetCollection, customBuyProduct = data.customBuyProduct, customGetProduct = data.customGetProduct;
    var xValue = customGetProduct.length > 0 ? customGetProduct : customBuyProduct;
    var yValue = customGetCollection.length > 0 ? customGetCollection : customBuyCollection;
    var buyAlternativeArray = customBuyProduct.length > 0 && customGetCollection.length > 0 ? customGetCollection : [];
    var getAlternativeArray = customGetProduct.length > 0 && customBuyCollection.length > 0 ? customGetProduct : [];
    var combinedArray = buyAlternativeArray.length > 0 || getAlternativeArray.length > 0
        ? buyAlternativeArray.concat(getAlternativeArray)
        : xValue.concat(yValue);
    return combinedArray;
};
var findOverAllCartTotal = function (lineItems) {
    return lineItems.reduce(function (acc, lineItem) {
        var unitPrice = lineItem.unitPrice, quantity = lineItem.quantity;
        return (acc += unitPrice * quantity);
    }, 0);
};
var findOfferLineItemTotal = function (lineItems) {
    return lineItems.reduce(function (acc, lineItem) {
        var customGetProductPrice = lineItem.customGetProductPrice, freeQuantity = lineItem.freeQuantity;
        return (acc += customGetProductPrice * freeQuantity);
    }, 0);
};
var validateInputData = function (data) {
    var cartType = data.cartType, cartValue = data.cartValue, lineItems = data.lineItems, customBuyCollection = data.customBuyCollection, customBuyProduct = data.customBuyProduct;
    var getCombinedArray = combineBuyConfigArrays({ customBuyCollection: customBuyCollection, customBuyProduct: customBuyProduct });
    var total = getCombinedArray.reduce(function (total, id) {
        var sum = lineItems.reduce(function (acc, lineItem) {
            var _a = lineItem || {}, collectionId = _a.collectionId, variantId = _a.variantId, quantity = _a.quantity, unitPrice = _a.unitPrice;
            if (variantId === id || collectionId === id) {
                var currentValue = cartType === "amount" ? quantity * unitPrice : quantity;
                acc += currentValue;
            }
            return acc;
        }, 0);
        return (total += sum);
    }, 0);
    return total >= cartValue;
};
var validateOverAllData = function (data) {
    var cartType = data.cartType, cartValue = data.cartValue, lineItems = data.lineItems;
    var total = lineItems.reduce(function (acc, lineItem) {
        var quantity = lineItem.quantity, unitPrice = lineItem.unitPrice;
        var currentValue = cartType === "amount" ? quantity * unitPrice : quantity;
        return (acc += currentValue);
    }, 0);
    return total >= cartValue;
};
var buyXChooseYInputValidation = function (data) {
    var cartType = data.cartType, cartValue = data.cartValue, lineItems = data.lineItems, buyOfferType = data.buyOfferType, getProducts = data.getProducts, getProductCount = data.getProductCount, offerCategory = data.offerCategory;
    var sanitizedGetProduct = (0,_flow_common_utils__WEBPACK_IMPORTED_MODULE_0__.getLineItemsObj)(getProducts);
    var buyCombinedArray = combineBuyConfigArrays(data);
    var total = buyCombinedArray.reduce(function (total, id) {
        var sum = lineItems.reduce(function (acc, lineItem) {
            var _a = lineItem || {}, collectionId = _a.collectionId, variantId = _a.variantId, quantity = _a.quantity, unitPrice = _a.unitPrice;
            if (variantId === id || collectionId === id) {
                var currentValue = cartType === "amount" ? quantity * unitPrice : quantity;
                acc += currentValue;
            }
            return acc;
        }, 0);
        return (total += sum);
    }, 0);
    if (buyOfferType === "collections") {
        var getProductExist = lineItems.some(function (lineItem) {
            var variantId = (lineItem || {}).variantId;
            return sanitizedGetProduct[variantId];
        });
        var normaliseValue = cartType !== "amount" && getProductExist ? total - getProductCount : total;
        return offerCategory === "automaticOffers"
            ? total >= cartValue
            : normaliseValue >= cartValue;
    }
    return total >= cartValue;
};
var validateBuyArrayAvaliable = function (data) {
    var customBuyProduct = data.customBuyProduct, customBuyCollection = data.customBuyCollection, lineItems = data.lineItems;
    var validationArray = customBuyProduct.concat(customBuyCollection);
    return validationArray.some(function (id) {
        return lineItems.some(function (lineItem) {
            var _a = lineItem || {}, collectionId = _a.collectionId, variantId = _a.variantId;
            return variantId === id || collectionId === id;
        });
    });
};
var validateGetArrayAvaliable = function (data) {
    var customGetProduct = data.customGetProduct, customGetCollection = data.customGetCollection, lineItems = data.lineItems;
    var validationArray = customGetProduct.concat(customGetCollection);
    return validationArray.some(function (id) {
        return lineItems.some(function (lineItem) {
            var _a = lineItem || {}, collectionId = _a.collectionId, variantId = _a.variantId;
            return variantId === id || collectionId === id;
        });
    });
};
var validateGetProductCount = function (data) {
    var customGetProduct = data.customGetProduct, getProductCount = data.getProductCount, lineItems = data.lineItems;
    var quantity = customGetProduct.reduce(function (count, id) {
        var sum = lineItems.reduce(function (acc, lineItem) {
            var _a = lineItem || {}, collectionId = _a.collectionId, variantId = _a.variantId, quantity = _a.quantity;
            if (variantId === id || collectionId === id)
                acc += quantity;
            return acc;
        }, 0);
        return (count += sum);
    }, 0);
    return quantity >= getProductCount;
};
var findUserProductCartTotal = function (data) {
    var sanitizedLineItem = data.sanitizedLineItem, lineItems = data.lineItems;
    return sanitizedLineItem.reduce(function (total, key) {
        var sum = lineItems.reduce(function (acc, lineItem) {
            var _a = lineItem || {}, collectionId = _a.collectionId, variantId = _a.variantId, quantity = _a.quantity, unitPrice = _a.unitPrice;
            if (variantId === key || collectionId === key)
                acc += quantity * unitPrice;
            return acc;
        }, 0);
        return (total += sum);
    }, 0);
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
/* harmony import */ var _controller_flow_category_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller/flow-category.controller */ "./src/controller/flow-category.controller.ts");
/* harmony import */ var _utils_flow_common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/flow-common.utils */ "./src/utils/flow-common.utils.ts");


var flow = function (appContext, configSchema) {
    var cartLineItems = appContext.cartLineItems;
    var lineItems = cartLineItems.lineItems;
    var getOfferCategory = configSchema.map(function (schema) {
        var getConfigSchema = (0,_utils_flow_common_utils__WEBPACK_IMPORTED_MODULE_1__.schemaReBuilder)(schema);
        var getBuildInputData = (0,_utils_flow_common_utils__WEBPACK_IMPORTED_MODULE_1__.buildInputData)(getConfigSchema, lineItems);
        console.log({ getConfigSchema: getConfigSchema, getBuildInputData: getBuildInputData }, (0,_controller_flow_category_controller__WEBPACK_IMPORTED_MODULE_0__.findOfferCategory)(getBuildInputData));
        return (0,_controller_flow_category_controller__WEBPACK_IMPORTED_MODULE_0__.findOfferCategory)(getBuildInputData);
    });
    var defalutFlowOffer = [];
    var filteredArray = getOfferCategory.filter(function (output) {
        console.log({ output: output });
        var schema = output.schema, totalCartValue = output.totalCartValue, offerApplied = output.offerApplied, getRemovedProductList = output.getRemovedProductList;
        var offerCategory = schema.offerCategory;
        if (!offerApplied)
            defalutFlowOffer.push({
                offerApplied: offerApplied,
                output: [],
                getRemovedProductList: getRemovedProductList,
                displayText: "",
                totalCartValue: 0,
                schema: schema
            });
        if (offerCategory === "automaticOffers" && offerApplied)
            return totalCartValue > 0;
        return offerApplied;
    });
    var sortBestOfferData = filteredArray.sort(function (start, next) { return start.totalCartValue - next.totalCartValue; });
    var getBestOfferData = sortBestOfferData.length > 0 ? sortBestOfferData[0] : defalutFlowOffer[0];
    return JSON.stringify(getBestOfferData);
};

})();

vajroPlugin = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=vajroPlugin.js.map

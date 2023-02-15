const productLineItems = [
    {
      "customAttributes": {
        "color": "black",
        "size": "medium",
        "discount": "20%",
        "delivery fee": "free"
      },
      "lineItemHandle": "nWg4GMsr",
      "lineItemType": "REGULAR",
      "originalUnitPrice": 418,
      "productId": "7962233176382",
      "quantity": 1,
      "totalPrice": 418,
      "unitPrice": 418,
      "variantId": "43638350479678"
    },
    {
      "customAttributes": {
        "color": "black",
        "size": "medium",
        "discount": "20%",
        "delivery fee": "free"
      },
      "lineItemHandle": "8AxBzJ1q",
      "lineItemType": "REGULAR",
      "originalUnitPrice": 188,
      "productId": "7962233209150",
      "quantity": 1,
      "totalPrice": 188,
      "unitPrice": 188,
      "variantId": "43638350512446"
    },
    {
      "customAttributes": {
        "color": "black",
        "size": "medium",
        "discount": "20%",
        "delivery fee": "free"
      },
      "lineItemHandle": "Sm1XL5eZ",
      "lineItemType": "REGULAR",
      "originalUnitPrice": 918,
      "productId": "7962233143614",
      "quantity": 1,
      "totalPrice": 918,
      "unitPrice": 918,
      "variantId": "43638350446910"
    },
    {
      "customAttributes": {
        "color": "black",
        "size": "medium",
        "discount": "20%",
        "delivery fee": "free"
      },
      "lineItemHandle": "Xx2PDZxT",
      "lineItemType": "REGULAR",
      "originalUnitPrice": 278.6,
      "productId": "7962235797822",
      "quantity": 1,
      "totalPrice": 278.6,
      "unitPrice": 278.6,
      "variantId": "43638359327038"
    },
    {
      "customAttributes": {
        "color": "black",
        "size": "medium",
        "discount": "20%",
        "delivery fee": "free"
      },
      "lineItemHandle": "jMictk0g",
      "lineItemType": "REGULAR",
      "originalUnitPrice": 257.6,
      "productId": "7962236191038",
      "quantity": 1,
      "totalPrice": 257.6,
      "unitPrice": 257.6,
      "variantId": "43638360408382"
    },
    {
      "customAttributes": {
        "color": "black",
        "size": "medium",
        "discount": "20%",
        "delivery fee": "free"
      },
      "lineItemHandle": "8ZZW9CCV",
      "lineItemType": "REGULAR",
      "originalUnitPrice": 278.6,
      "productId": "7962235568446",
      "quantity": 1,
      "totalPrice": 278.6,
      "unitPrice": 278.6,
      "variantId": "43638358901054"
    },
    {
      "customAttributes": {
        "color": "black",
        "size": "medium",
        "discount": "20%",
        "delivery fee": "free"
      },
      "lineItemHandle": "traLbi8c",
      "lineItemType": "REGULAR",
      "originalUnitPrice": 428,
      "productId": "7962235535678",
      "quantity": 1,
      "totalPrice": 428,
      "unitPrice": 428,
      "variantId": "43638358769982"
    },
    {
      "customAttributes": {
        "color": "black",
        "size": "medium",
        "discount": "20%",
        "delivery fee": "free"
      },
      "lineItemHandle": "O9qyOXpF",
      "lineItemType": "REGULAR",
      "originalUnitPrice": 159.6,
      "productId": "7962231603518",
      "quantity": 1,
      "totalPrice": 159.6,
      "unitPrice": 159.6,
      "variantId": "43638344581438"
    },
    {
      "customAttributes": {
        "color": "black",
        "size": "medium",
        "discount": "20%",
        "delivery fee": "free"
      },
      "lineItemHandle": "agNtWD48",
      "lineItemType": "REGULAR",
      "originalUnitPrice": 159.6,
      "productId": "7962231570750",
      "quantity": 1,
      "totalPrice": 159.6,
      "unitPrice": 159.6,
      "variantId": "43638344417598"
    }
];

function getOfferedProductDetails (lineItems, fixedAmount) {

    function getLineItemObj(lineItems) {
        return lineItems.reduce((acc, lineItem) => {
                const { variantId } = lineItem;
                acc[variantId] = lineItem;
                return acc;
        }, {});
    }

    const excludedProductIds = [];

    const lineItemsObj = getLineItemObj(lineItems);

    const excludedProductObj = excludedProductIds.reduce((obj, producDetails) => {
        const { variantId } = producDetails;
        return { ...obj, [variantId]: producDetails };
    }, {});

    const cartTotalAfterExclude = lineItems.reduce((total, lineItem) => {
        const { totalPrice, variantId } = lineItem;
        return !!excludedProductObj[variantId] ? total : total + totalPrice;
    }, 0);


    const getPercentageForCartTotal = (cartTotal, fixedAmount) => {
        return (fixedAmount / cartTotal) * 100;
    }

    const fixedAmountPercentageForCartTotal = getPercentageForCartTotal(cartTotalAfterExclude, fixedAmount);

    const getDiscountPriceForProduct = (producDetails, percentageOfProduct) => {
        const { unitPrice } = producDetails;
        return (unitPrice*(percentageOfProduct/100));
    }

    return lineItems.reduce((totalOfferDetails, producDetails) => {
        const { productId, variantId, quantity, unitPrice } = producDetails;
        let { overAllDiscount, offerAppliedProducts = [] } = totalOfferDetails;
        const discountPrice = getDiscountPriceForProduct(producDetails, fixedAmountPercentageForCartTotal);
        const newUnitPrice = unitPrice - discountPrice;
        overAllDiscount = discountPrice + overAllDiscount;
        let newProductDetails = {
            productId,
            variantId,
            quantity,
            unitPrice: newUnitPrice,
            oldUnitPrice: unitPrice
        }
        offerAppliedProducts = [...offerAppliedProducts, newProductDetails];
        return { overAllDiscount, fixedAmountPercentageForCartTotal ,offerAppliedProducts };
    }, {
        overAllDiscount: 0,
        offerAppliedProducts: []
    });

}


console.log(getOfferedProductDetails(productLineItems, 200));
console.log(getOfferedProductDetails(productLineItems, 400));
console.log(getOfferedProductDetails(productLineItems, 500));
console.log(getOfferedProductDetails(productLineItems, 1200));
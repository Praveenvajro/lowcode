            // window.lineItemAddedToCart = (appContext, lineItem) => {
            //     console.log(appContext, lineItem, 'hello');
            //     alert(JSON.stringify(lineItem));
            //     document.getElementById('info').innerHTML =
            //         JSON.stringify(lineItem);
            // };

            // function addCharger(){
            //      const values = {
            //                 productId: '6750261739711',
            //                 variantId: '41722470400191',
            //                 quantity: 1,
            //                 customAttributes: {},
            //                 lineItemType: 'REGULAR'
            //             };
            //             VajroSDK.addLineItemToCart(
            //                 values.productId,
            //                 values.variantId,
            //                 values.quantity,
            //                 values.customAttributes,
            //                 values.lineItemType
            //             )
            //                 .then((res) => {
            //                     output.innerHTML = `The sub product added for main product`;
            //                     setTimeout(() => {
            //                         output.innerHTML = '';
            //                     }, 10000);
            //                 })
            //                 .catch((err) => {
            //                     output.innerHTML = err;
            //                 });
            // }

            // let output = document.getElementById('output');
            // output.innerHTML = 'this is sample one';
            
            // VajroSDK.subscribe(
            //     VajroSDK.Triggers.LINE_ITEM_ADDED_TO_CART,
            //     (appContext, lineItem) => {
            //         let { productId } = lineItem;
            //         let content = `<div>The product ${productId} added to your cart</div>`;
            //         output.innerHTML = output.innerHTML + content;
            //     }
            // );
            // VajroSDK.subscribe(
            //     VajroSDK.Triggers.LINE_ITEM_ADDED_TO_CART,
            //     (appContext, updateType, lineItem) => {
            //         let { productId } = lineItem;
            //         let content = `<div>The product ${productId}`;
            //         if (updateType === 'Increment') {
            //             content += ' count is increased in the cart';
            //         } else if (updateType === 'Decrement') {
            //             content += ' count is decreased in the cart';
            //         } else if (updateType === 'Delete') {
            //             content += ' is deleted from cart';
            //         }
            //         content += '</div>';
            //         output.innerHTML = output.innerHTML + content;
            //     }
            // );
            VajroSDK.subscribe(
                VajroSDK.Triggers.LINE_ITEM_ADDED_TO_CART,
                (appContext, lineItem) => {
                    output.innerHTML = output.innerHTML + `<div>LINE_ITEM_ADDED_TO_CART trigger invoked</div>`;
                    let { productId, quantity } = lineItem;
                    let { cartLineItems: { totalAfterSavings, lineItems } } = appContext;
                    let extraproduct;
                    for (let { productId: id } of lineItems) {
                        if (id === '6733310853311') {
                            extraproduct = id;
                            break;
                        }
                    }
                    document.innerHTML = document.innerHTML + `This ${productId} is added in cart`;
                    if (productId === '6928830267583') {
                        const values = {
                            productId: '6750261739711',
                            variantId: '41722470400191',
                            quantity: quantity,
                            customAttributes: {},
                            lineItemType: 'REGULAR'
                        };
                        output.innerHTML = output.innerHTML + `<div>addLineItemToCart action invoked</div>`;
                        VajroSDK.addLineItemToCart(
                            values.productId,
                            values.variantId,
                            values.quantity,
                            values.customAttributes,
                            values.lineItemType
                        )
                            .then((res) => {
                                output.innerHTML = `The sub product added for main product`;
                                setTimeout(() => {
                                    output.innerHTML = '';
                                }, 10000);
                            })
                            .catch((err) => {
                                output.innerHTML = err;
                            });
                    } else {
                        let content = `<div>The product ${productId} added to your cart</div>`;
                        output.innerHTML = output.innerHTML + content;
                    }

                    if (totalAfterSavings > 1000 && extraproduct != "6733310853311"){
                        const values = {
                            productId: '6733310853311',
                            variantId: '39989207400639',
                            quantity: 1,
                            customAttributes: {},
                            lineItemType: 'REGULAR'
                        };
                        VajroSDK.addLineItemToCart(
                            values.productId,
                            values.variantId,
                            values.quantity,
                            values.customAttributes,
                            values.lineItemType
                        )
                            .then((res) => {})
                            .catch((err) => {
                                output.innerHTML = err;
                            });
                    } 
                }
            );

            VajroSDK.subscribe(
                VajroSDK.Triggers.LINE_ITEM_UPDATED,
                (appContext, updateType, lineItem) => {
                    output.innerHTML = output.innerHTML + JSON.stringify(`Line item - ${lineItem}`);
                    let { productId } = lineItem;
                    let { cartLineItems: { totalAfterSavings, lineItems } } = appContext;
                    let extraproduct;
                    for (let { productId: id } of lineItems) {
                        if (id === '6733310853311') {
                            extraproduct = id;
                            break;
                        }
                    }
                    let content = `<div>The product ${productId}`;
                    if (updateType === 'Increment') {
                        let { productId } = lineItem;
                        if (productId === '6928830267583') {
                            const values = {
                                productId: '6750261739711',
                                variantId: '41722470400191',
                                quantity: 1,
                                customAttributes: {},
                                lineItemType: 'REGULAR'
                            };
                            VajroSDK.addLineItemToCart(
                                values.productId,
                                values.variantId,
                                values.quantity,
                                values.customAttributes,
                                values.lineItemType
                            )
                                .then((res) => {})
                                .catch((err) => {
                                    output.innerHTML = err;
                                });
                        } else {
                            // let { productId } = lineItem;
                            // let content = `<div>The product ${productId}`;
                            // if (updateType === 'Increment') {
                                content += ' count is increased in the cart';
                            // } else if (updateType === 'Decrement') {
                            //     content += ' count is decreased in the cart';
                            // } else if (updateType === 'Delete') {
                            //     content += ' is deleted from cart';
                            // }
                            content += '</div>';
                            output.innerHTML = output.innerHTML + content;
                        }
                        if (totalAfterSavings > 1000  && extraproduct != "6733310853311"){
                            const values = {
                                productId: '6733310853311',
                                variantId: '39989207400639',
                                quantity: 1,
                                customAttributes: {},
                                lineItemType: 'REGULAR'
                            };
                            VajroSDK.addLineItemToCart(
                                values.productId,
                                values.variantId,
                                values.quantity,
                                values.customAttributes,
                                values.lineItemType
                            )
                                .then((res) => {})
                                .catch((err) => {
                                    output.innerHTML = err;
                                });
                        } 
                    } else if (updateType === 'Decrement') {
                        let { productId, lineItemHandle } = lineItem;
                        output.innerHTML = output.innerHTML + `Line item handle - ${lineItemHandle}`;
                        if (productId === '6928830267583') {
                            let {
                                cartLineItems: { lineItems }
                            } = appContext;
                            let subLineItemHandle;
                            for (let {
                                lineItemHandle,
                                productId: id
                            } of lineItems) {
                                if (id === '6750261739711') {
                                    subLineItemHandle = lineItemHandle;
                                    break;
                                }
                            }
                            if (subLineItemHandle) {
                                VajroSDK.removeLineItemFromCart(
                                    subLineItemHandle,
                                    1
                                )
                                    .then(() => {})
                                    .catch((err) => {});
                            }
                        } else {
                            content += ' count is decreased in the cart';
                            content += '</div>';
                            output.innerHTML = output.innerHTML + content;
                        }

                        if (totalAfterSavings < 1000){
                            let { cartLineItems: { lineItems } } = appContext;
                            let subLineItemHandle;
                            for (let { lineItemHandle, productId: id } of lineItems) {
                                if (id === '6733310853311') {
                                    subLineItemHandle = lineItemHandle;
                                    break;
                                }
                            }
                            if (subLineItemHandle) {
                                VajroSDK.removeLineItemFromCart(subLineItemHandle, 1).then(() => {}).catch((err) => {});
                            }
                        }
                    } else if (updateType === 'Delete') {
                        let { productId } = lineItem;
                        if (totalAfterSavings < 1000){
                            let { cartLineItems: { lineItems } } = appContext;
                            let subLineItemHandle;
                            for (let { lineItemHandle, productId: id } of lineItems) {
                                if (id === '6733310853311') {
                                    subLineItemHandle = lineItemHandle;
                                    break;
                                }
                            }
                            if (subLineItemHandle) {
                                VajroSDK.removeLineItemFromCart(subLineItemHandle, 1).then(() => {}).catch((err) => {});
                            }
                        }
                        if (productId === '6928830267583') {
                            let {
                                cartLineItems: { lineItems }
                            } = appContext;
                            let subLineItemHandle;
                            for (let {
                                lineItemHandle,
                                productId: id
                            } of lineItems) {
                                if (id === '6750261739711') {
                                    subLineItemHandle = lineItemHandle;
                                    break;
                                }
                            }
                            if (subLineItemHandle) {
                                VajroSDK.removeLineItemFromCart(
                                    subLineItemHandle,
                                    1
                                )
                                    .then(() => {})
                                    .catch((err) => {});
                            }
                        } else {
                            content += ' is deleted from cart';
                            content += '</div>';
                            output.innerHTML = output.innerHTML + content;
                        }
                    }
                }
            );

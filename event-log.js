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

            let output = document.getElementById('output');
            output.innerHTML = 'this is sample one';
            
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
                    // output.innerHTML = output.innerHTML + `<div>LINE_ITEM_ADDED_TO_CART trigger invoked</div>`;
                    let { productId, quantity } = lineItem;
                    let { cartLineItems: { totalAfterSavings, lineItems } } = appContext;
                    let extraproduct;
                    for (let { productId: id } of lineItems) {
                        if (id === '6733310853311') {
                            extraproduct = id;
                            break;
                        }
                        if (id === '7041966440639') {
                            extraproduct3thous = id;
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
                            lineItemType: 'READONLY'
                        };
                        // output.innerHTML = output.innerHTML + `<div>addLineItemToCart action invoked</div>`;
                        VajroSDK.addLineItemToCart(values.productId,values.variantId,values.quantity,values.customAttributes,values.lineItemType).then((res) => {
                                // output.innerHTML = `The sub product added for main product`;
                                // setTimeout(() => {
                                //     output.innerHTML = '';
                                // }, 10000);
                            })
                            .catch((err) => {
                                // output.innerHTML = err;
                            });
                    } else {
                        let content = `<div>The product ${productId} added to your cart</div>`;
                        // output.innerHTML = output.innerHTML + content;
                    }
                    progressbarcalc(totalAfterSavings, 3000)
                    if (totalAfterSavings > 3000 && extraproduct3thous != "7041966440639"){
                        // output.innerHTML = totalAfterSavings + "above 3000 product"
                        addThreeThousAboveProduct()
                        progressbarcalc(totalAfterSavings, 3000)
                    } else if (totalAfterSavings > 1000 && extraproduct != "6733310853311"){
                        // output.innerHTML = totalAfterSavings + "above 3000 product"
                        addThousAboveProduct()
                        progressbarcalc(totalAfterSavings, 1000)
                    } 

                    
                }
            );

            VajroSDK.subscribe(
                VajroSDK.Triggers.LINE_ITEM_UPDATED,
                (appContext, updateType, lineItem) => {
                    // output.innerHTML = output.innerHTML + JSON.stringify(`Line item - ${lineItem}`);
                    let { productId } = lineItem;
                    let { cartLineItems: { totalAfterSavings, lineItems } } = appContext;
                    let extraproduct, extraproduct3thous, aboveLineItemHandle1000, aboveLineItemHandle3000;
                    for (let { lineItemHandle, productId: id } of lineItems) {
                        if (id === '6733310853311') {
                            extraproduct = id;
                            aboveLineItemHandle1000 = lineItemHandle
                            break;
                        }
                        if (id === '7041966440639') {
                            extraproduct3thous = id;
                            aboveLineItemHandle3000 = lineItemHandle
                            break;
                        }
                    }
                    let content = `<div>The product ${productId}`;
                    if (updateType === 'Increment') {
                        let { productId, quantity, lineItemHandle } = lineItem;
                        // Buy1Get1 Add one item to the cart condition
                        if (productId === '6928830267583') {
                            const values = {
                                productId: '6750261739711',
                                variantId: '41722470400191',
                                quantity: quantity,
                                customAttributes: {},
                                lineItemType: 'READONLY'
                            };
                            VajroSDK.addLineItemToCart(values.productId, values.variantId, values.quantity, values.customAttributes, values.lineItemType).then((res) => {})
                                .catch((err) => {
                                    // output.innerHTML = err;
                                });
                        } else {
                                content += ' count is increased in the cart';
                                content += '</div>';
                                // output.innerHTML = output.innerHTML + content;
                        }
                        if (totalAfterSavings > 3000 ){    // Above 3000 add one item to the cart condition
                            if(extraproduct3thous != "7041966440639"){
                                VajroSDK.removeLineItemFromCart(aboveLineItemHandle1000, 0).then(() => {}).catch((err) => {});
                                addThreeThousAboveProduct()
                            }
                            progressbarcalc(totalAfterSavings, 3000)
                        } else if (totalAfterSavings > 1000){   // Above 1000 add one item to the cart condition
                            if(extraproduct != "6733310853311"){
                                VajroSDK.removeLineItemFromCart(aboveLineItemHandle3000, 0).then(() => {}).catch((err) => {});
                                addThousAboveProduct()
                            }
                            progressbarcalc(totalAfterSavings, 3000)
                        }else {
                            progressbarcalc(totalAfterSavings, 1000)
                        } 
                    } else if (updateType === 'Decrement') {
                        let { productId, lineItemHandle, quantity } = lineItem;
                        // output.innerHTML = output.innerHTML + `Line item handle - ${lineItemHandle}`;
                        // Buy1Get1 Remove one item to the cart condition
                        if (productId === '6928830267583') {
                            let {cartLineItems: { lineItems }} = appContext;
                            let subLineItemHandle;
                            for (let {lineItemHandle, productId: id} of lineItems) {
                                if (id === '6750261739711') {
                                    subLineItemHandle = lineItemHandle;
                                    break;
                                }
                            }
                            if (subLineItemHandle) {
                                VajroSDK.removeLineItemFromCart(subLineItemHandle, quantity).then(() => {}).catch((err) => {});
                            }
                        } else {
                            content += ' count is decreased in the cart';
                            content += '</div>';
                            // output.innerHTML = output.innerHTML + content;
                        }
                        if (totalAfterSavings < 3000 && extraproduct3thous == "7041966440639"){   // Below 3000 remove one item to the cart condition
                            let { cartLineItems: { lineItems } } = appContext;
                            // let subLineItemHandle;
                            for (let { lineItemHandle, productId: id } of lineItems) {
                                if (id === '7041966440639') {
                                    // subLineItemHandle = lineItemHandle;
                                    // break;
                                    VajroSDK.removeLineItemFromCart(lineItemHandle, 0).then(() => {}).catch((err) => {});
                                    addThousAboveProduct()
                                    VajroSDK.removeLineItemFromCart(aboveLineItemHandle3000, 0).then(() => {}).catch((err) => {});
                                }
                            }
                            progressbarcalc(totalAfterSavings, 3000)
                        } else if (totalAfterSavings < 1000 && extraproduct == "6733310853311"){    // Below 1000 remove one item to the cart condition
                            let { cartLineItems: { lineItems } } = appContext;
                            let subLineItemHandle;
                            for (let { lineItemHandle, productId: id } of lineItems) {
                                if (id === '6733310853311') {
                                    subLineItemHandle = lineItemHandle;
                                    break;
                                }
                            }
                            if (subLineItemHandle) {
                                VajroSDK.removeLineItemFromCart(subLineItemHandle, 0).then(() => {}).catch((err) => {});
                                progressbarcalc(totalAfterSavings, 1000)
                                VajroSDK.removeLineItemFromCart(aboveLineItemHandle1000, 0).then(() => {}).catch((err) => {});
                            }
                        }else {
                            if(totalAfterSavings < 1000){
                                progressbarcalc(totalAfterSavings, 1000)
                            }else {
                                // output.innerHTML = output.innerHTML + totalAfterSavings + " 3000";
                                progressbarcalc(totalAfterSavings, 3000)
                            }
                        }
                    } else if (updateType === 'Delete') {
                        let { productId } = lineItem;
                        if (totalAfterSavings < 1000){
                            let { cartLineItems: { lineItems } } = appContext;
                            for (let { lineItemHandle, productId: id } of lineItems) {
                                if (id === '6733310853311') {
                                    VajroSDK.removeLineItemFromCart(lineItemHandle, 0).then(() => {}).catch((err) => {});
                                }
                                if (id === '7041966440639') {
                                    VajroSDK.removeLineItemFromCart(lineItemHandle, 0).then(() => {}).catch((err) => {});
                                }
                            }
                            progressbarcalc(totalAfterSavings, 1000)
                        }else if (totalAfterSavings < 3000){
                            let { cartLineItems: { lineItems } } = appContext;
                            for (let { lineItemHandle, productId: id } of lineItems) {
                                if (id === '7041966440639') {
                                    VajroSDK.removeLineItemFromCart(lineItemHandle, 0).then(() => {}).catch((err) => {});
                                    addThousAboveProduct()
                                }
                            }
                            progressbarcalc(totalAfterSavings, 3000)
                        }else {
                            progressbarcalc(totalAfterSavings, 3000)
                        }
                        
                        if (productId === '6928830267583') {
                            let {cartLineItems: { lineItems }} = appContext;
                            let subLineItemHandle;
                            for (let {lineItemHandle, productId: id} of lineItems) {
                                if (id === '6750261739711') {
                                    subLineItemHandle = lineItemHandle;
                                    break;
                                }
                            }
                            if (subLineItemHandle) {
                                VajroSDK.removeLineItemFromCart(subLineItemHandle, 0).then(() => {}).catch((err) => {});
                            }
                        } else {
                            content += ' is deleted from cart';
                            content += '</div>';
                            // output.innerHTML = output.innerHTML + content;
                        }
                    }
                }
            );

            function progressbarcalc(totalAfterSavings, aboveamount) {
                const progressBarContainer = document.querySelector('.progress-bar__container');
                const progressBar = document.querySelector('.progress-bar');
                const progressText = document.getElementById('progress-text');
                progressText.innerHTML = ""
                const percentageamount = (totalAfterSavings / aboveamount * 100) > 100 ? 100 : totalAfterSavings / aboveamount * 100;
                gsap.to(progressBar, {
                    x: `${percentageamount}%`,
                    duration: 2,
                    backgroundColor: '#4895ef',
                    onComplete: () => {
                        // progressBarText.style.display = "initial";
                        progressBarContainer.style.boxShadow = '0 0 5px #4895ef';
                    }
                });
                output.innerHTML = output.innerHTML + "aboamt: " + aboveamount
                output.innerHTML = output.innerHTML + "totamt: " + totalAfterSavings
                output.innerHTML = output.innerHTML + "per: " + percentageamount
                // if(totalAfterSavings <=  aboveamount){ 
                    output.innerHTML = output.innerHTML + "progress: " + totalAfterSavings + " total: " + aboveamount
                    progressText.innerHTML = `₹ ${aboveamount.toFixed(2)}`;
                // }
            }

            function addThousAboveProduct(){
                const values = {
                    productId: '6733310853311',
                    variantId: '39989207400639',
                    quantity: 1,
                    customAttributes: {},
                    lineItemType: 'READONLY'
                };
                VajroSDK.addLineItemToCart(values.productId, values.variantId, values.quantity, values.customAttributes, values.lineItemType).then((res) => {})
                    .catch((err) => {
                        // output.innerHTML = err;
                    });
            }

            function addThreeThousAboveProduct(){
                const values = {
                    productId: '7041966440639',
                    variantId: '40940367184063',
                    quantity: 1,
                    customAttributes: {},
                    lineItemType: 'READONLY'
                };
                VajroSDK.addLineItemToCart(values.productId, values.variantId, values.quantity, values.customAttributes, values.lineItemType).then((res) => {})
                    .catch((err) => {
                        // output.innerHTML = err;
                    });
            }
              

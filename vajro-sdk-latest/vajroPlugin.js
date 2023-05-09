var vajroPlugin;(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{flow:()=>m});var n=function(){return n=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var u in e=arguments[n])Object.prototype.hasOwnProperty.call(e,u)&&(t[u]=e[u]);return t},n.apply(this,arguments)},r=function(t){return t.reduce((function(t,e){return t[e.variantId]=e,t}),{})},u=function(t){return'<!DOCTYPE html>\n\t<html lang="en">\n\t\t<head>\n\t\t\t<meta charset="UTF-8" />\n\t\t\t<meta http-equiv="X-UA-Compatible" content="IE=edge" />\n\t\t\t<meta name="viewport" content="width=device-width,initial-scale=1.0" />\n\t\t</head>\n\t\t<body style="min-width: auto; min-height: auto">\n\t\t\t<p style="text-align: center;font-size: 14px"><b>'.concat(t,"</b></p>\n\t\t</body>\n\t</html>")},o=function(t){var e=t.customBuyCollection,n=t.customBuyProduct;return n.length>0||e.length>0?n.concat(e):[]},i=function(t){return t.reduce((function(t,e){return t+e.unitPrice*e.quantity}),0)},c=function(t){var e=t.cartType,n=t.cartValue,u=t.lineItems,i=t.buyOfferType,c=t.getProducts,a=t.getProductCount,d=t.offerCategory,l=r(c),f=o(t).reduce((function(t,n){return t+u.reduce((function(t,r){var u=r||{},o=u.collectionId,i=u.variantId,c=u.quantity,a=u.unitPrice;return i!==n&&o!==n||(t+="amount"===e?c*a:c),t}),0)}),0);if("collections"===i){var s=u.some((function(t){var e=(t||{}).variantId;return l[e]}));return"automaticOffers"===d?f>=n:("amount"!==e&&s?f-a:f)>=n}return f>=n},a=function(t){var e=t.cartType,n=t.cartValue,u=t.lineItems,o=t.getProducts,i=t.getProductCount,c=t.offerCategory,a=r(o),d=u.reduce((function(t,n){var r=n.quantity,u=n.unitPrice;return t+("amount"===e?r*u:r)}),0),l=u.some((function(t){var e=(t||{}).variantId;return a[e]}));return"automaticOffers"===c?d>=n:("amount"!==e&&l?d-i:d)>=n},d=function(t){var e=t.customGetProduct,n=t.customGetCollection,r=t.lineItems;return e.concat(n).some((function(t){return r.some((function(e){var n=e||{},r=n.collectionId;return n.variantId===t||r===t}))}))},l=function(t,e,n,r,u,o){var i=e||{},c=i.unitPrice,a=i.quantity,d=i.variantId,l=i.productId,f=i.lineItemHandle;if("percentage"===n)return{productId:l,variantId:d,quantity:a,unitPrice:(s=a*c-a*c*(u/100))/a,lineItemHandle:f,discountType:t,discountValue:"",customLineItemType:"REGULAR"};if("amount"===n){var s,m=a*c/o*100/100*r;return{productId:l,variantId:d,quantity:a,unitPrice:0!=(s=a*c>=m?a*c-m:0)?s/a:0,lineItemHandle:f,discountType:t,discountValue:"",customLineItemType:"REGULAR"}}return{}},f=function(t){var e=t.offerCategory,n=t.getProductCount,r=t.customGetProductId,u=t.customGetVariantId,o=t.isGetProductIdInLineitem,i=t.productId,c=t.variantId,a=t.lineItemHandle,d=t.quantity,l=void 0===d?n:d,f=t.unitPrice,s=o&&n>l?n:l;return{productId:i||r,variantId:c||u,quantity:s,freeQuantity:n,unitPrice:s===n?0:f,lineItemHandle:a,discountType:s>=n?e:"",discountValue:"",customLineItemType:"REGULAR",isGetProductIdInLineitem:o,customGetProductPrice:t.customGetProductPrice}},s=function(t,e,n){if("automaticOffers"!==n){var u=r(e);return t.reduce((function(t,e){var n=e.variantId,r=e.unitPrice,o=e.quantity,i=u[n]||{},c=i.unitPrice,a=i.quantity,d=i.freeQuantity;return t+(c||0===c?c:r)*((a||o)-(void 0===d?0:d))}),0)}var o=i(t),c=function(t){return t.reduce((function(t,e){return t+e.customGetProductPrice*e.freeQuantity}),0)}(e);return o>c?o-c:o},m=function(t,e){var m=t.cartLineItems.lineItems,v=e.map((function(t){var e=function(t){var e=t.buyCollections,n=void 0===e?[]:e,r=t.getCollections,u=void 0===r?[]:r,o=t.buyProducts,i=void 0===o?[]:o,c=t.getProducts,a=void 0===c?[]:c,d=t.getProductCount,l=i.map((function(t){return t.variantId}));t.customBuyProduct=l;var f=a.map((function(t){return t.variantId}));t.customGetProduct=f;var s=n.map((function(t){return t.collectionId}));t.customBuyCollection=s;var m=u.map((function(t){return t.collectionId}));return t.customGetCollection=m,d||(t.getProductCount=0),t}(t),v=function(t,e){var r=function(t){return t.map((function(t){var e=t.originalUnitPrice;return t.unitPrice=e,t}))}(e)||[],u=function(t){return t.map((function(t){var e=t.originalUnitPrice;return t.unitPrice=e,t}))}(e);return n(n({getConfigSchema:t},t),{lineItems:u,getRemovedProductList:r})}(e,m);return function(t){switch(t.offerCategory){case"percentageDiscount":case"flatDiscount":return function(t){var e=t.getRemovedProductList,n=t.lineItems,r=t.buyOfferType,c=t.customGetProduct,a=t.customGetCollection,f=t.displayText,m=void 0===f?"":f,v=t.getConfigSchema,g=t.offerCategory,I="overAll"!==r&&function(t){var e=t.cartType,n=t.cartValue,r=t.lineItems;return o(t).reduce((function(t,n){return t+r.reduce((function(t,r){var u=r||{},o=u.collectionId,i=u.variantId,c=u.quantity,a=u.unitPrice;return i!==n&&o!==n||(t+="amount"===e?c*a:c),t}),0)}),0)>=n}(t),y="overAll"===r||!(c.length>0||a.length>0)||function(t){var e=t.customBuyProduct,n=t.customBuyCollection,r=t.lineItems;return e.concat(n).some((function(t){return r.some((function(e){var n=e||{},r=n.collectionId;return n.variantId===t||r===t}))}))}(t),P="overAll"===r||!(c.length>0||a.length>0)||d(t),p="overAll"!==r||!(c.length>0||a.length>0)||d(t),h=!("overAll"!==r||!p)&&function(t){var e=t.cartType,n=t.cartValue;return t.lineItems.reduce((function(t,n){var r=n.quantity,u=n.unitPrice;return t+("amount"===e?r*u:r)}),0)>=n}(t),C=(h||I)&&y&&P?function(t){var e=t.offerCategory,n=t.discountType,r=t.discountValue,u=t.lineItems,o=t.customGetProduct,c=t.customGetCollection,a=function(t){var e=t.customBuyCollection,n=t.customGetCollection,r=t.customBuyProduct,u=t.customGetProduct,o=u.length>0?u:r,i=n.length>0?n:e,c=r.length>0&&n.length>0?n:[],a=u.length>0&&e.length>0?u:[];return c.length>0||a.length>0?c.concat(a):o.concat(i)}(t),d=o.length<=0&&c.length<=0?u:a,f=o.length<=0&&c.length<=0?i(d):function(t){var e=t.lineItems;return t.sanitizedLineItem.reduce((function(t,n){return t+e.reduce((function(t,e){var r=e||{},u=r.collectionId,o=r.variantId,i=r.quantity,c=r.unitPrice;return o!==n&&u!==n||(t+=i*c),t}),0)}),0)}({sanitizedLineItem:d,lineItems:u}),s="percentage"===n&&r>=100?100:r,m=[];return d.forEach((function(t){if("string"==typeof t)u.forEach((function(u){var o=u||{},i=o.collectionId;if(o.variantId===t||i===t){var c=l(e,u,n,r,s,f);m.push(c)}}));else{var o=l(e,t,n,r,s,f);m.push(o)}})),m}(t):[],G=C.length>0&&m.length>0?u(m):"",T=C.length>0?s(n,C,g):0;return{offerApplied:C.length>0,output:C,getRemovedProductList:e,displayText:G,totalCartValue:T,schema:v}}(t);case"buyXGetY":return function(t){var e=t.getRemovedProductList,n=t.getConfigSchema,o=t.lineItems,i=t.buyOfferType,d=t.displayText,l=t.offerCategory,m="overAll"!==i?c(t):a(t),v=function(t){var e=t.customGetProduct,n=t.getProductCount,r=t.lineItems;return e.reduce((function(t,e){return t+r.reduce((function(t,n){var r=n||{},u=r.collectionId,o=r.variantId,i=r.quantity;return o!==e&&u!==e||(t+=i),t}),0)}),0)>=n}(t),g=m&&v?function(t){var e=t.offerCategory,n=t.getProducts,u=t.customGetProduct,o=t.lineItems,i=t.getProductCount,c=r(o),a=u.filter((function(t){return c[t]})).sort((function(t,e){return c[t].unitPrice-c[e].unitPrice})),d=[],l=i;return a.forEach((function(t,r){var u,o,i;if(l){var a=!!c[t],s=c[t]||{},m=s.productId,v=s.variantId,g=s.quantity,I=s.unitPrice,y=s.lineItemHandle,P=l>g?g:l;(l-=g)<0&&(l=0);var p=f({productId:m,variantId:v,lineItemHandle:y,quantity:g,getProductCount:P,unitPrice:I,offerCategory:e,customGetProductId:null===(u=n[r])||void 0===u?void 0:u.productId,customGetVariantId:null===(o=n[r])||void 0===o?void 0:o.variantId,customGetProductPrice:null===(i=n[r])||void 0===i?void 0:i.productPrice,isGetProductIdInLineitem:a});d.push(p)}})),d}(t):[],I=g.length>0&&d.length>0?u(d):"",y=g.length>0?s(o,g,l):0;return{offerApplied:g.length>0,output:g,getRemovedProductList:e,displayText:I,totalCartValue:y,schema:n}}(t);case"automaticOffers":return function(t){var e=t.getRemovedProductList,n=t.getConfigSchema,o=t.lineItems,i=t.buyOfferType,d=t.displayText,l=t.offerCategory,m=("overAll"!==i?c(t):a(t))?function(t){var e=t.offerCategory,n=t.getProducts,u=void 0===n?[]:n,o=t.customGetProduct,i=t.lineItems,c=t.getProductCount,a=r(i),d=[];return o.forEach((function(t,n){var r,o,i,l=!!a[t],s=a[t]||{},m=s.productId,v=s.variantId,g=s.quantity,I=s.unitPrice,y=s.lineItemHandle,P=f({productId:m,variantId:v,lineItemHandle:y,quantity:g,getProductCount:c,unitPrice:I,offerCategory:e,customGetProductId:null===(r=u[n])||void 0===r?void 0:r.productId,customGetVariantId:null===(o=u[n])||void 0===o?void 0:o.variantId,customGetProductPrice:null===(i=u[n])||void 0===i?void 0:i.productPrice,isGetProductIdInLineitem:l});d.push(P)})),d}(t):[],v=m.length>0&&d.length>0?u(d):"",g=m.length>0?s(o,m,l):0;return{offerApplied:m.length>0,output:m,getRemovedProductList:e,displayText:v,totalCartValue:g,schema:n}}(t);default:return{}}}(v)})),g=[],I=v.filter((function(t){var e=t.schema,n=t.totalCartValue,r=t.offerApplied,u=t.getRemovedProductList,o=e.offerCategory;return r||g.push({offerApplied:r,output:[],getRemovedProductList:u,displayText:"",totalCartValue:0,schema:e}),"automaticOffers"===o&&r?n>0:r})).sort((function(t,e){return t.totalCartValue-e.totalCartValue})),y=I.length>0?I[0]:g[0];return JSON.stringify(y)};vajroPlugin=e})();
//# sourceMappingURL=vajroPlugin.js.map

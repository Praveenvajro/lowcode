var vajroPlugin;(()=>{"use strict";var t={d:(r,e)=>{for(var o in e)t.o(e,o)&&!t.o(r,o)&&Object.defineProperty(r,o,{enumerable:!0,get:e[o]})},o:(t,r)=>Object.prototype.hasOwnProperty.call(t,r),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},r={};t.r(r),t.d(r,{flow:()=>_});var e=function(){return e=Object.assign||function(t){for(var r,e=1,o=arguments.length;e<o;e++)for(var i in r=arguments[e])Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);return t},e.apply(this,arguments)},o=function(t,r,e){if(e||2===arguments.length)for(var o,i=0,n=r.length;i<n;i++)!o&&i in r||(o||(o=Array.prototype.slice.call(r,0,i)),o[i]=r[i]);return t.concat(o||Array.prototype.slice.call(r))},i=function(t){return t.reduce((function(t,r){var i,n,a=r.offerCategory;return t[a]?e(e({},t),((i={})[a]=o(o([],t[a],!0),[r],!1),i)):e(e({},t),((n={})[a]=[r],n))}),{automaticOffers:[],buyXGetY:[],percentageDiscount:[],flatDiscount:[]})},n=function(t){return t.reduce((function(t,r){return t[r.variantId]=r,t}),{})},a=function(t,r){var e={isHaveLineItemHandle:!1,productLineItemHandle:"tempHandle".concat(Math.floor(1e6*Math.random()))};return Object.entries(t).forEach((function(t){var o=t[0],i=t[1],n=e.isHaveLineItemHandle,a=i.variantId;n||r!==a||(e={isHaveLineItemHandle:!0,productLineItemHandle:o})})),e},c=function(t){return t.reduce((function(t,r){var o=r.originalUnitPrice,i=void 0===o?0:o,n=r.quantity,a=void 0===n?0:n,c=r.customAttributes,u=(void 0===c?{}:c)._vajro_flow,l=void 0===u?{}:u,d=("string"==typeof l?JSON.parse(l):e({},l))||{},f=d._actualUnitPrice,s=void 0===f?i:f,v=d._discountQuantity,p=void 0===v?0:v,y=d._freeQuantity;return t+s*(a-(Number(void 0===y?0:y)+Number(p)))}),0)},u=function(t){return t.reduce((function(t,r){var e=r.quantity,o=void 0===e?0:e,i=r.freeQuantity;return t+(o-(void 0===i?0:i))}),0)},l=function(){return l=Object.assign||function(t){for(var r,e=1,o=arguments.length;e<o;e++)for(var i in r=arguments[e])Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);return t},l.apply(this,arguments)},d=function(t,r,e){if(e||2===arguments.length)for(var o,i=0,n=r.length;i<n;i++)!o&&i in r||(o||(o=Array.prototype.slice.call(r,0,i)),o[i]=r[i]);return t.concat(o||Array.prototype.slice.call(r))},f=function(){return f=Object.assign||function(t){for(var r,e=1,o=arguments.length;e<o;e++)for(var i in r=arguments[e])Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);return t},f.apply(this,arguments)},s=function(t,r,e){if(e||2===arguments.length)for(var o,i=0,n=r.length;i<n;i++)!o&&i in r||(o||(o=Array.prototype.slice.call(r,0,i)),o[i]=r[i]);return t.concat(o||Array.prototype.slice.call(r))},v=function(){return v=Object.assign||function(t){for(var r,e=1,o=arguments.length;e<o;e++)for(var i in r=arguments[e])Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);return t},v.apply(this,arguments)},p=function(t,r,e){if(e||2===arguments.length)for(var o,i=0,n=r.length;i<n;i++)!o&&i in r||(o||(o=Array.prototype.slice.call(r,0,i)),o[i]=r[i]);return t.concat(o||Array.prototype.slice.call(r))},y=function(){return y=Object.assign||function(t){for(var r,e=1,o=arguments.length;e<o;e++)for(var i in r=arguments[e])Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);return t},y.apply(this,arguments)},m=function(t,r,e){if(e||2===arguments.length)for(var o,i=0,n=r.length;i<n;i++)!o&&i in r||(o||(o=Array.prototype.slice.call(r,0,i)),o[i]=r[i]);return t.concat(o||Array.prototype.slice.call(r))},b=function(){return b=Object.assign||function(t){for(var r,e=1,o=arguments.length;e<o;e++)for(var i in r=arguments[e])Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);return t},b.apply(this,arguments)},g=function(t,r,e){if(e||2===arguments.length)for(var o,i=0,n=r.length;i<n;i++)!o&&i in r||(o||(o=Array.prototype.slice.call(r,0,i)),o[i]=r[i]);return t.concat(o||Array.prototype.slice.call(r))},_=function(t,r){var _={},h=t.cartLineItems.lineItems,I=void 0===h?[]:h,O=function(t,r){var e=[],i=[];return t.forEach((function(t){var a=n(r),l=t.cartType,d=t.cartValue,f=t.buyOfferType,s=t.buyProducts,v=t.buyCollections,p=(t.getOfferType,t.discountType,t.getProductCount,t.reccuringFreeProduct,t.getProducts,[]);if("products"===f)s.forEach((function(t){var r=t.variantId;a[r]&&(p=o(o([],p,!0),[a[r]],!1))}));else if("collections"===f){var y=r.filter((function(t){var r,e=(null===(r=null==t?void 0:t.collectionId)||void 0===r?void 0:r.split(","))||[];return v.some((function(t){var r=t.collectionId;return e.includes(r)}))}));y.length>0&&(p=o(o([],p,!0),y,!0))}else p=r;("amount"===l?c(p):u(p))>=d?e=o(o([],e,!0),[t],!1):i=o(o([],i,!0),[t],!1)})),{validConfigList:e,inValidConfigList:i}}(r,I).validConfigList,P=O.reduce((function(t,r,i){var n=t.combinedOfferConfig,a=t.nonCombinedOfferConfig,c=r.combinedOffer;return e(e({},t),c?{combinedOfferConfig:o(o([],n,!0),[e(e({},r),{index:i})],!1)}:{nonCombinedOfferConfig:o(o([],a,!0),[e(e({},r),{index:i})],!1)})}),{combinedOfferConfig:[],nonCombinedOfferConfig:[]}),A=P.combinedOfferConfig,j=void 0===A?[]:A,T=P.nonCombinedOfferConfig,N=void 0===T?[]:T,w=function(t){return t.reduce((function(t,r){var o,i=r.lineItemHandle,n=r.customAttributes,a=void 0===n?{}:n,c=a._vajro_flow,u=void 0===c?{}:c,l="string"==typeof u?JSON.parse(u):e({},u);return-1!==Object.keys(l).indexOf("_actualUnitPrice")?e(e({},t),((o={})[i]=e(e({},r),{customAttributes:e(e({},a),{_vajro_flow:l})}),o)):t}),{})}(I),U={};(null==j?void 0:j.length)>0&&(U.combinedOffer=i(j)),N.forEach((function(t,r){var e=(null===crypto||void 0===crypto?void 0:crypto.randomUUID)&&(null===crypto||void 0===crypto?void 0:crypto.randomUUID())||"offer".concat(r);U[e]=i([t])})),Object.entries(U).forEach((function(t){var r=t[0],e=t[1],o={};Object.entries(e).forEach((function(t){var r=t[0],e=t[1];if(0!==e.length)switch(r){case"automaticOffers":o=function(t,r,e){var o=n(r),i=(null===crypto||void 0===crypto?void 0:crypto.randomUUID)&&(null===crypto||void 0===crypto?void 0:crypto.randomUUID())||"freeOfferTarget";return t.forEach((function(t){var n=t.cartType,f=t.cartValue,s=t.buyOfferType,v=t.buyProducts,p=t.buyCollections,y=t.getProductCount,m=t.reccuringFreeProduct,b=t.getProducts,g=t.displayText,_=[];if("products"===s)v.forEach((function(t){var r=t.variantId;o[r]&&(_=d(d([],_,!0),[o[r]],!1))}));else if("collections"===s){var h=r.filter((function(t){var r,e=(null===(r=null==t?void 0:t.collectionId)||void 0===r?void 0:r.split(","))||[];return p.some((function(t){var r=t.collectionId;return e.includes(r)}))}));h.length>0&&(_=d(d([],_,!0),h,!0))}else _=r;var I="amount"===n?c(_):u(_);if(I>=Number(f)){var O=m?Math.floor(I/f)*y:Number(y);b.forEach((function(t){var r,n,c=t.variantId,u=t.productId,f=t.productPrice,s=a(e,c),v=s.isHaveLineItemHandle,p=s.productLineItemHandle,y=o[c]||{},m=y.lineItemHandle,b=y.quantity,_=void 0===b?0:b,h=y.customAttributes,I=void 0===h?{}:h;m&&(p=m);var P=v||m?e[p]:null,A=I._vajro_flow,j=void 0===A?{}:A,T="string"==typeof j?JSON.parse(j):l({},j),N=T._freeQuantity,w=void 0===N?0:N,U=_?Number(_)-Number(w):0,D=P||{},Q=D.customAttributes,x=(void 0===Q?{}:Q)._vajro_flow,H=void 0===x?{}:x,C=D.displayTextDetails,E=void 0===C?[]:C;O&&P?e=l(l({},e),((r={})[p]=l(l({},P),{displayTextDetails:E.includes(g)?E:d(d([],E,!0),[g],!1),customAttributes:{_vajro_flow:l(l(l({},T),H),{_productQuantity:U,_freeQuantity:Number((null==H?void 0:H._freeQuantity)||0)+O})}}),r)):O&&(e=l(l({},e),((n={})[p]={variantId:c,productId:u,displayTextDetails:[g],lineItemHandle:m,customAttributes:{_vajro_flow:l(l(l({},T),H),{_productQuantity:U,_actualUnitPrice:Number(f),_freeQuantity:O,_productTargetId:i})}},n)))}))}})),e}(e,I,o);break;case"buyXGetY":o=function(t,r,e){var o=n(r),i=(null===crypto||void 0===crypto?void 0:crypto.randomUUID)&&(null===crypto||void 0===crypto?void 0:crypto.randomUUID())||"freeOfferTarget";return t.forEach((function(t,r){var n=t.getProductCount,c=t.getProducts,u=t.displayText;c.forEach((function(t){var r,c,l=t.variantId,d=t.productId,v=t.productPrice,p=a(e,l),y=p.isHaveLineItemHandle,m=p.productLineItemHandle,b=o[l]||{},g=b.quantity,_=void 0===g?0:g,h=b.lineItemHandle,I=b.customAttributes,O=(void 0===I?{}:I)._vajro_flow,P=void 0===O?{}:O,A=("string"==typeof P?JSON.parse(P):f({},P))._freeQuantity,j=void 0===A?0:A,T=_-j>n?n:_-j,N=y?e[m]:null,w=N||{},U=w.customAttributes,D=(void 0===U?{}:U)._vajro_flow,Q=void 0===D?{}:D,x=w.displayTextDetails,H=void 0===x?[]:x;T&&N?e=f(f({},e),((r={})[m]=f(f({},N),{displayTextDetails:H.includes(u)?H:s(s([],H,!0),[u],!1),customAttributes:{_vajro_flow:f(f({},Q),{_discountQuantity:T+((null==Q?void 0:Q._discountQuantity)||0),_productTargetId:i})}}),r)):T&&(e=f(f({},e),((c={})[m]={variantId:l,productId:d,lineItemHandle:h,displayTextDetails:[u],customAttributes:{_vajro_flow:f(f({},Q),{_productQuantity:_-j,_actualUnitPrice:Number(v),_discountQuantity:T,_productTargetId:i})}},c)))}))})),e}(e,I,o);break;case"percentageDiscount":o=function(t,r,e){var o=n(r);return t.forEach((function(t,i){var n=(null===crypto||void 0===crypto?void 0:crypto.randomUUID)&&(null===crypto||void 0===crypto?void 0:crypto.randomUUID())||"percentageOffer".concat(i),a=t.discountValue,c=t.getOfferType,u=t.getProducts,l=t.getCollections,d=t.displayText,f=[];if("products"===c)u.forEach((function(t){var r=t.variantId;o[r]&&(f=m(m([],f,!0),[o[r]],!1))}));else if("collections"===c){var s=r.filter((function(t){var r,e=(null===(r=null==t?void 0:t.collectionId)||void 0===r?void 0:r.split(","))||[];return l.some((function(t){var r=t.collectionId;return e.includes(r)}))}));s.length>0&&(f=m(m([],f,!0),s,!0))}else f=m([],r,!0);f.forEach((function(t){var r,o=t.variantId,i=t.productId,c=t.lineItemHandle,u=t.originalUnitPrice,l=t.quantity,f=void 0===l?0:l,s=t.customAttributes,v=(void 0===s?{}:s)._vajro_flow,p=void 0===v?{}:v,m="string"==typeof p?JSON.parse(p):y({},p),b=m._actualUnitPrice,g=void 0===b?u:b,_=m._freeQuantity,h=void 0===_?0:_,I=e[c]||{},O=I.customAttributes,P=(void 0===O?{}:O)._vajro_flow,A=void 0===P?{}:P,j=f?Number(f)-Number(h):0,T=g*(a/100),N=A._discountPrice,w=void 0===N?0:N,U=A._discountQuantity,D=void 0===U?0:U;T>w&&j>0&&(e=y(y({},e),((r={})[c]=y(y({},I),{variantId:o,productId:i,lineItemHandle:c,displayText:d,customAttributes:{_vajro_flow:y(y({},A),{_actualUnitPrice:Number(g),_discountPrice:T,_productQuantity:j,_discountQuantity:T===g?j:D,_offerPercenatage:a>=100?100:a,_percentageTargetId:n})}}),r)))}))})),e}(e,I,o);break;case"flatDiscount":o=function(t,r,e){var o=n(r),i=v({},e);function a(t,r,e,o,n){if(0!==t.length){var a=c(t),u=e/a*100,l=t.map((function(t){return v(v({},t),{customAttributes:{}})}));t.forEach((function(t){var a,c=t.variantId,d=t.productId,f=t.lineItemHandle,s=t.originalUnitPrice,p=t.quantity,y=void 0===p?0:p,m=t.customAttributes,b=(void 0===m?{}:m)._vajro_flow,g=void 0===b?{}:b,_="string"==typeof g?JSON.parse(g):v({},g),h=_._actualUnitPrice,I=void 0===h?s:h,O=_._freeQuantity,P=void 0===O?0:O,A=i[f]||{},j=A.customAttributes,T=(void 0===j?{}:j)._vajro_flow,N=void 0===T?{}:T,w=y?Number(y)-Number(P):0,U=o?I*(u/100):e,D=N._discountQuantity,Q=void 0===D?0:D;i=v(v({},i),((a={})[f]=v(v({},A),{variantId:c,productId:d,lineItemHandle:f,displayText:r,customAttributes:{_vajro_flow:v(v({},N),{_actualUnitPrice:Number(I),_productQuantity:w,_discountPrice:U>=I?I:U,_discountQuantity:U>=I?w:Q,_offerPercenatage:u>=100?100:u,_amountTargetId:n,_flatDiscountDetails:{lineItems:l,splitFlatAmount:o,discountValue:e,displayText:r}})}}),a))}))}}return t.forEach((function(t,e){var n=(null===crypto||void 0===crypto?void 0:crypto.randomUUID)&&(null===crypto||void 0===crypto?void 0:crypto.randomUUID())||"amountOffer".concat(e),u=t.discountValue,l=t.getOfferType,d=t.getProducts,f=t.getCollections,s=t.splitFlatAmount,y=t.displayText,m=[];if("products"===l)d.forEach((function(t){var r=t.variantId,e=o[r]||{},i=e.quantity,n=void 0===i?0:i,a=e.customAttributes,c=(void 0===a?{}:a)._vajro_flow,u=void 0===c?{}:c,l=("string"==typeof u?JSON.parse(u):v({},u))._freeQuantity,d=void 0===l?0:l;Number(n)-Number(d)>0&&(m=p(p([],m,!0),[o[r]],!1))}));else if("collections"===l){var b=r.filter((function(t){var r,e=t.quantity,o=void 0===e?0:e,i=t.customAttributes,n=(void 0===i?{}:i)._vajro_flow,a=void 0===n?{}:n,c=(null===(r=null==t?void 0:t.collectionId)||void 0===r?void 0:r.split(","))||[],u=f.some((function(t){var r=t.collectionId;return c.includes(r)})),l=("string"==typeof a?JSON.parse(a):v({},a))._freeQuantity,d=void 0===l?0:l;return u&&Number(o)-Number(d)>0}));b.length>0&&(m=p(p([],m,!0),b,!0))}else m=r.filter((function(t){var r=t.quantity,e=void 0===r?0:r,o=t.customAttributes,i=(void 0===o?{}:o)._vajro_flow,n=void 0===i?{}:i,a=("string"==typeof n?JSON.parse(n):v({},n))._freeQuantity,c=void 0===a?0:a;return Number(e)-Number(c)>0}));var g=c(m),_=v({},i);m=m.filter((function(t){var r=t.variantId,e=t.lineItemHandle,o=t.originalUnitPrice,i=t.customAttributes,n=(void 0===i?{}:i)._vajro_flow,c=void 0===n?{}:n,l=("string"==typeof c?JSON.parse(c):v({},c))._actualUnitPrice,d=void 0===l?o:l,f=(_[e]||{}).customAttributes,p=(void 0===f?{}:f)._vajro_flow,y=void 0===p?{}:p,m=s?d*(u/g):u,b=y._discountPrice,h=void 0===b?0:b,I=y._flatDiscountDetails,O=void 0===I?{}:I,P=y._amountTargetId,A=y.displayText,j=O.lineItems,T=void 0===j?[]:j,N=O.splitFlatAmount,w=void 0!==N&&N,U=O.discountValue,D=void 0===U?0:U;if(m>h){var Q=T.filter((function(t){return t.variantId!==r}));w&&Q.length>0&&a(Q,A,D,w,P)}return m>h})),a(m,y,u,s,n)})),i}(e,I,o)}}));var i=[];Object.values(o).forEach((function(t){var r=t.displayTextDetails,e=void 0===r?[]:r,o=t.displayText,n=void 0===o?"":o;g(g([],e,!0),[n],!1).forEach((function(t){!i.includes(t)&&t&&(i=g(g([],i,!0),[t],!1))}))})),_[r]={offerAppliedProducts:o,displayTextArray:i}}));var D=Object.entries(_).reduce((function(t,r){r[0];var o=r[1],i=t.discountPrice,n=o.offerAppliedProducts,a=o.displayTextArray,c=function(t){return t.reduce((function(t,r){var o=r.customAttributes,i=(void 0===o?{}:o)._vajro_flow,n=void 0===i?{}:i,a="string"==typeof n?JSON.parse(n):e({},n),c=a._actualUnitPrice,u=void 0===c?0:c,l=a._discountPrice,d=void 0===l?0:l,f=a._discountQuantity,s=void 0===f?0:f,v=a._freeQuantity,p=void 0===v?0:v,y=a._productQuantity,m=void 0===y?0:y;return t+(Number(u)*(Number(s)+Number(p))+Number(d)*Number(m))}),0)}(Object.values(n));return c>=i?{discountPrice:c,offerAppliedDetails:n,displayTextArray:a}:t}),{discountPrice:0,offerAppliedDetails:{},displayTextArray:[]}),Q=D.discountPrice,x=D.offerAppliedDetails,H=function(t){if(0===t.length)return"";var r=t.map((function(t){return'<p style="text-align: center;font-size: 14px"><b>'.concat(t,"</b></p>")})).join("");return'<!DOCTYPE html>\n\t<html lang="en">\n\t\t<head>\n\t\t\t<meta charset="UTF-8" />\n\t\t\t<meta http-equiv="X-UA-Compatible" content="IE=edge" />\n\t\t\t<meta name="viewport" content="width=device-width,initial-scale=1.0" />\n\t\t</head>\n\t\t<body style="min-width: auto; min-height: auto">\n            '.concat(r,"\n\t\t</body>\n\t</html>")}(D.displayTextArray),C=Object.keys(w).reduce((function(t,r){var e;return x[r]?t:b(b({},t),((e={})[r]=w[r],e))}),{});return{discountPrice:Q,offerAppliedDetails:x,offerRemovedDetails:C,displayTextHtml:H}};vajroPlugin=r})();
//# sourceMappingURL=vajroPlugin.js.map

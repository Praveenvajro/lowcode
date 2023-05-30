var vajroPlugin;(()=>{"use strict";var t={d:(r,e)=>{for(var n in e)t.o(e,n)&&!t.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:e[n]})},o:(t,r)=>Object.prototype.hasOwnProperty.call(t,r),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},r={};t.r(r),t.d(r,{flow:()=>g});var e=function(){return e=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var i in r=arguments[e])Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);return t},e.apply(this,arguments)},n=function(t,r,e){if(e||2===arguments.length)for(var n,i=0,o=r.length;i<o;i++)!n&&i in r||(n||(n=Array.prototype.slice.call(r,0,i)),n[i]=r[i]);return t.concat(n||Array.prototype.slice.call(r))},i=function(t){return t.reduce((function(t,r){var i,o,c=r.offerCategory;return t[c]?e(e({},t),((i={})[c]=n(n([],t[c],!0),[r],!1),i)):e(e({},t),((o={})[c]=[r],o))}),{automaticOffers:[],buyXGetY:[],percentageDiscount:[],flatDiscount:[]})},o=function(t){return t.reduce((function(t,r){return t[r.variantId]=r,t}),{})},c=function(t){return t.reduce((function(t,r){var e=r.unitPrice,n=void 0===e?0:e,i=r.quantity,o=void 0===i?0:i,c=r.customAttributes,a=void 0===c?{}:c,u=a._actualUnitPrice,d=void 0===u?n:u,l=a._discountQuantity,f=void 0===l?0:l,s=a._freeQuantity;return t+d*(o-(Number(void 0===s?0:s)+Number(f)))}),0)},a=function(t){return t.reduce((function(t,r){var e=r.quantity,n=void 0===e?0:e,i=r.freeQuantity;return t+(n-(void 0===i?0:i))}),0)},u=function(){return u=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var i in r=arguments[e])Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);return t},u.apply(this,arguments)},d=function(t,r,e){if(e||2===arguments.length)for(var n,i=0,o=r.length;i<o;i++)!n&&i in r||(n||(n=Array.prototype.slice.call(r,0,i)),n[i]=r[i]);return t.concat(n||Array.prototype.slice.call(r))},l=function(){return l=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var i in r=arguments[e])Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);return t},l.apply(this,arguments)},f=function(t,r,e){if(e||2===arguments.length)for(var n,i=0,o=r.length;i<o;i++)!n&&i in r||(n||(n=Array.prototype.slice.call(r,0,i)),n[i]=r[i]);return t.concat(n||Array.prototype.slice.call(r))},s=function(){return s=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var i in r=arguments[e])Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);return t},s.apply(this,arguments)},v=function(t,r,e){if(e||2===arguments.length)for(var n,i=0,o=r.length;i<o;i++)!n&&i in r||(n||(n=Array.prototype.slice.call(r,0,i)),n[i]=r[i]);return t.concat(n||Array.prototype.slice.call(r))},p=function(){return p=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var i in r=arguments[e])Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);return t},p.apply(this,arguments)},y=function(t,r,e){if(e||2===arguments.length)for(var n,i=0,o=r.length;i<o;i++)!n&&i in r||(n||(n=Array.prototype.slice.call(r,0,i)),n[i]=r[i]);return t.concat(n||Array.prototype.slice.call(r))},m=function(){return m=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var i in r=arguments[e])Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);return t},m.apply(this,arguments)},b=function(t,r,e){if(e||2===arguments.length)for(var n,i=0,o=r.length;i<o;i++)!n&&i in r||(n||(n=Array.prototype.slice.call(r,0,i)),n[i]=r[i]);return t.concat(n||Array.prototype.slice.call(r))},g=function(t,r){var g={},h=t.cartLineItems.lineItems,I=void 0===h?[]:h,P=function(t,r){var e=[],i=[];return t.forEach((function(t){var u=o(r),d=t.cartType,l=t.cartValue,f=t.buyOfferType,s=t.buyProducts,v=t.buyCollections,p=(t.getOfferType,t.discountType,t.getProductCount,t.reccuringFreeProduct,t.getProducts,[]);"products"===f?s.forEach((function(t){var r=t.variantId;u[r]&&(p=n(n([],p,!0),[u[r]],!1))})):"collections"===f?v.forEach((function(t){var e=t.collectionId,i=r.filter((function(t){return e===t.collectionId}));i.length>0&&(p=n(n([],p,!0),i,!0))})):p=r,("amount"===d?c(p):a(p))>=l?e=n(n([],e,!0),[t],!1):i=n(n([],i,!0),[t],!1)})),{validConfigList:e,inValidConfigList:i}}(r,I).validConfigList,A=P.reduce((function(t,r,i){var o=t.combinedOfferConfig,c=t.nonCombinedOfferConfig,a=r.combinedOffer;return e(e({},t),a?{combinedOfferConfig:n(n([],o,!0),[e(e({},r),{index:i})],!1)}:{nonCombinedOfferConfig:n(n([],c,!0),[e(e({},r),{index:i})],!1)})}),{combinedOfferConfig:[],nonCombinedOfferConfig:[]}),O=A.combinedOfferConfig,_=void 0===O?[]:O,T=A.nonCombinedOfferConfig,U=void 0===T?[]:T,D=function(t){return t.reduce((function(t,r){var n,i=r.variantId,o=r.customAttributes,c=void 0===o?{}:o;return-1!==Object.keys(c).indexOf("_actualUnitPrice")?e(e({},t),((n={})[i]=r,n)):t}),{})}(I),j={};(null==_?void 0:_.length)>0&&(j.combinedOffer=i(_)),U.forEach((function(t,r){var e=(null===crypto||void 0===crypto?void 0:crypto.randomUUID)&&(null===crypto||void 0===crypto?void 0:crypto.randomUUID())||"offer".concat(r);j[e]=i([t])})),Object.entries(j).forEach((function(t){var r=t[0],e=t[1],n={};Object.entries(e).forEach((function(t){var r=t[0],e=t[1];if(0!==e.length)switch(r){case"automaticOffers":n=function(t,r,e){var n=o(r),i=(null===crypto||void 0===crypto?void 0:crypto.randomUUID)&&(null===crypto||void 0===crypto?void 0:crypto.randomUUID())||"freeOfferTarget";return t.forEach((function(t){var o=t.cartType,l=t.cartValue,f=t.buyOfferType,s=t.buyProducts,v=t.buyCollections,p=t.getProductCount,y=t.reccuringFreeProduct,m=t.getProducts,b=t.displayText,g=[];"products"===f?s.forEach((function(t){var r=t.variantId;n[r]&&(g=d(d([],g,!0),[n[r]],!1))})):"collections"===f?v.forEach((function(t){var e=t.collectionId,n=r.filter((function(t){return e===t.collectionId}));n.length>0&&(g=d(d([],g,!0),n,!0))})):g=r;var h="amount"===o?c(g):a(g);if(h>=l){var I=y?Math.floor(h/l)*p:p;m.forEach((function(t){var r,o,c=t.variantId,a=t.productId,l=t.productPrice,f=e[c],s=n[c]||{},v=s.lineItemHandle,p=s.quantity,y=void 0===p?0:p,m=(n[c]&&n[c].customAttributes||{})._freeQuantity,g=void 0===m?0:m,h=y?Number(y)-Number(g):0,P=f||{},A=P.customAttributes,O=void 0===A?{}:A,_=P.displayTextDetails,T=void 0===_?[]:_;I&&f?e=u(u({},e),((r={})[c]=u(u({},f),{displayTextDetails:T.includes(b)?T:d(d([],T,!0),[b],!1),customAttributes:u(u(u({},O),f.customAttributes),{_productQuantity:h,_freeQuantity:((null==O?void 0:O.freeQuantity)||0)+I})}),r)):I&&(e=u(u({},e),((o={})[c]={variantId:c,productId:a,displayTextDetails:[b],lineItemHandle:v,customAttributes:u(u({},O),{_productQuantity:h,_actualUnitPrice:Number(l),_freeQuantity:I,_productTargetId:i})},o)))}))}})),e}(e,I,n);break;case"buyXGetY":n=function(t,r,e){var n=o(r),i=(null===crypto||void 0===crypto?void 0:crypto.randomUUID)&&(null===crypto||void 0===crypto?void 0:crypto.randomUUID())||"freeOfferTarget";return t.forEach((function(t,r){var o=t.getProductCount,c=t.getProducts,a=t.displayText;c.forEach((function(t){var r,c,u,d=t.variantId,s=t.productId,v=t.productPrice,p=n[d]||{},y=p.quantity,m=void 0===y?0:y,b=p.freeQuantity,g=void 0===b?0:b,h=p.lineItemHandle,I=m-g>o?o:m-g,P=e[d],A=P||{},O=A.customAttributes,_=void 0===O?{}:O,T=A.displayTextDetails,U=void 0===T?[]:T;I&&P?e=l(l({},e),((r={})[d]=l(l({},P),{displayTextDetails:U.includes(a)?U:f(f([],U,!0),[a],!1),customAttributes:l(l(l({},_),P.customAttributes),{_discountQuantity:I+((null===(u=P.customAttributes)||void 0===u?void 0:u._discountQuantity)||0),_productTargetId:i})}),r)):I&&(e=l(l({},e),((c={})[d]={variantId:d,productId:s,lineItemHandle:h,displayTextDetails:[a],customAttributes:l(l({},_),{_productQuantity:m-g,_actualUnitPrice:Number(v),_discountQuantity:I,_productTargetId:i})},c)))}))})),e}(e,I,n);break;case"percentageDiscount":n=function(t,r,e){var n=o(r);return t.forEach((function(t,i){var o=(null===crypto||void 0===crypto?void 0:crypto.randomUUID)&&(null===crypto||void 0===crypto?void 0:crypto.randomUUID())||"percentageOffer".concat(i),c=t.discountValue,a=t.getOfferType,u=t.getProducts,d=t.getCollections,l=t.displayText,f=[];"products"===a?u.forEach((function(t){var r=t.variantId;n[r]&&(f=y(y([],f,!0),[n[r]],!1))})):"collections"===a?d.forEach((function(t){var e=t.collectionId,n=r.filter((function(t){return e===t.collectionId}));n.length>0&&(f=y(y([],f,!0),n,!0))})):f=y([],r,!0),f.forEach((function(t){var r,n=t.variantId,i=t.productId,a=t.lineItemHandle,u=t.unitPrice,d=t.quantity,f=void 0===d?0:d,s=t.customAttributes,v=void 0===s?{}:s,y=v._actualUnitPrice,m=void 0===y?u:y,b=v._freeQuantity,g=void 0===b?0:b,h=e[n]||{},I=h.customAttributes,P=void 0===I?{}:I,A=f?Number(f)-Number(g):0,O=m*(c/100),_=P._discountPrice,T=void 0===_?0:_,U=P._discountQuantity,D=void 0===U?0:U;O>T&&A>0&&(e=p(p({},e),((r={})[n]=p(p({},h),{variantId:n,productId:i,lineItemHandle:a,displayText:l,customAttributes:p(p({},P),{_actualUnitPrice:Number(m),_discountPrice:O,_productQuantity:A,_discountQuantity:O===m?A:D,_offerPercenatage:c>=100?100:c,_percentageTargetId:o})}),r)))}))})),e}(e,I,n);break;case"flatDiscount":n=function(t,r,e){var n=o(r),i=s({},e);function a(t,r,e,n,o){if(0!==t.length){var a=c(t),u=e/a*100;t.forEach((function(c){var a,d=c.variantId,l=c.productId,f=c.lineItemHandle,v=c.unitPrice,p=c.quantity,y=void 0===p?0:p,m=c.customAttributes,b=void 0===m?{}:m,g=b._actualUnitPrice,h=void 0===g?v:g,I=b._freeQuantity,P=void 0===I?0:I,A=i[d]||{},O=A.customAttributes,_=void 0===O?{}:O,T=y?Number(y)-Number(P):0,U=n?h*(u/100):e,D=_._discountQuantity,j=void 0===D?0:D;i=s(s({},i),((a={})[d]=s(s({},A),{variantId:d,productId:l,lineItemHandle:f,displayText:r,customAttributes:s(s({},_),{_actualUnitPrice:Number(h),_productQuantity:T,_discountPrice:U>=h?h:U,_discountQuantity:U>=h?T:j,_offerPercenatage:u>=100?100:u,_amountTargetId:o,_flatDiscountDetails:{lineItems:t,splitFlatAmount:n,discountValue:e,displayText:r}})}),a))}))}}return t.forEach((function(t,e){var o=(null===crypto||void 0===crypto?void 0:crypto.randomUUID)&&(null===crypto||void 0===crypto?void 0:crypto.randomUUID())||"amountOffer".concat(e),u=t.discountValue,d=t.getOfferType,l=t.getProducts,f=t.getCollections,p=t.splitFlatAmount,y=t.displayText,m=[];"products"===d?l.forEach((function(t){var r=t.variantId,e=n[r]||{},i=e.quantity,o=void 0===i?0:i,c=e.customAttributes,a=(void 0===c?{}:c)._freeQuantity,u=void 0===a?0:a;Number(o)-Number(u)>0&&(m=v(v([],m,!0),[n[r]],!1))})):"collections"===d?f.forEach((function(t){var e=t.collectionId,n=r.filter((function(t){var r=t.quantity,n=void 0===r?0:r,i=t.customAttributes,o=(void 0===i?{}:i)._freeQuantity,c=void 0===o?0:o;return e===t.collectionId&&Number(n)-Number(c)>0}));n.length>0&&(m=v(v([],m,!0),n,!0))})):m=r.filter((function(t){var r=t.quantity,e=void 0===r?0:r,n=t.customAttributes,i=(void 0===n?{}:n)._freeQuantity,o=void 0===i?0:i;return Number(e)-Number(o)>0}));var b=c(m),g=s({},i);m=m.filter((function(t){var r=t.variantId,e=t.unitPrice,n=t.customAttributes,i=(void 0===n?{}:n)._actualUnitPrice,o=void 0===i?e:i,c=(g[r]||{}).customAttributes,d=void 0===c?{}:c,l=p?o*(u/b):u,f=d._discountPrice,s=void 0===f?0:f,v=d._flatDiscountDetails,y=void 0===v?{}:v,m=d._amountTargetId,h=d.displayText,I=y.lineItems,P=void 0===I?[]:I,A=y.splitFlatAmount,O=void 0!==A&&A,_=y.discountValue,T=void 0===_?0:_;if(l>s){var U=P.filter((function(t){return t.variantId!==r}));O&&U.length>0&&a(U,h,T,O,m)}return l>s})),a(m,y,u,p,o)})),i}(e,I,n)}}));var i=[];Object.values(n).forEach((function(t){var r=t.variantId,e=t.displayTextDetails,o=void 0===e?[]:e,c=t.displayText,a=void 0===c?"":c,u=t.customAttributes;b(b([],o,!0),[a],!1).forEach((function(t){!i.includes(t)&&t&&(i=b(b([],i,!0),[t],!1))})),n[r]=m(m({},t),{customAttributes:m({_vajro_flow:u},u)})})),g[r]={offerAppliedProducts:n,displayTextArray:i}}));var x=Object.entries(g).reduce((function(t,r){r[0];var e=r[1],n=t.discountPrice,i=e.offerAppliedProducts,o=e.displayTextArray,c=function(t){return t.reduce((function(t,r){var e=r.customAttributes,n=void 0===e?{}:e,i=n._actualUnitPrice,o=void 0===i?0:i,c=n._discountPrice,a=void 0===c?0:c,u=n._discountQuantity,d=void 0===u?0:u,l=n._freeQuantity,f=void 0===l?0:l;return t+(Number(o)*(Number(d)+Number(f))+Number(a))}),0)}(Object.values(i));return c>n?{discountPrice:c,offerAppliedDetails:i,displayTextArray:o}:t}),{discountPrice:0,offerAppliedDetails:{},displayTextArray:[]}),Q=x.discountPrice,C=x.offerAppliedDetails,E=function(t){if(0===t.length)return"";var r=t.map((function(t){return'<p style="text-align: center;font-size: 14px"><b>'.concat(t,"</b></p>")})).join("");return'<!DOCTYPE html>\n\t<html lang="en">\n\t\t<head>\n\t\t\t<meta charset="UTF-8" />\n\t\t\t<meta http-equiv="X-UA-Compatible" content="IE=edge" />\n\t\t\t<meta name="viewport" content="width=device-width,initial-scale=1.0" />\n\t\t</head>\n\t\t<body style="min-width: auto; min-height: auto">\n            '.concat(r,"\n\t\t</body>\n\t</html>")}(x.displayTextArray),N=Object.keys(D).reduce((function(t,r){var e;return C[r]?t:m(m({},t),((e={})[r]=D[r],e))}),{});return{discountPrice:Q,offerAppliedDetails:C,offerRemovedDetails:N,displayTextHtml:E}};vajroPlugin=r})();
//# sourceMappingURL=vajroPlugin.js.map

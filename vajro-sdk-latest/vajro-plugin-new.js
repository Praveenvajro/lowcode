import { getAutomaticOfferProducts } from "./controller/automaticOffer"
import { getBuyXChooseYOfferProducts } from "./controller/buyXChooseY"
import { getFlatOfferProducts } from "./controller/flatDiscount"
import { getPercentageOfferProducts } from "./controller/percentageDiscount"
import { IAppContext, IConfigSchema } from "./interfaces/index.interface"
import { constructDisplayTextHtml, getCombinedOfferConfig, getOfferAppiedLineItems, getOfferBasedConfig, getOfferDiscountPrice, getValidInValidConfigDetails,  } from "./utils/common"

export const flow = (appContext: IAppContext, configSchema: IConfigSchema[]): any => {
	try {
	let flowObj : any = {};
	const { cartLineItems } = appContext;
	const { lineItems = [] } = cartLineItems;
	const { validConfigList } = getValidInValidConfigDetails(configSchema, lineItems);
	alert(validConfigList.length);
	const { combinedOfferConfig = [], nonCombinedOfferConfig = [] } = getCombinedOfferConfig(validConfigList);
	const removedProductDetails = getOfferAppiedLineItems(lineItems);
	const allOfferDetails: any = {};
	if(combinedOfferConfig?.length > 0) {
		allOfferDetails.combinedOffer = getOfferBasedConfig(combinedOfferConfig);
	}
	nonCombinedOfferConfig.forEach((configDetails: any, ind: number) => {
		const newOfferId = crypto?.randomUUID && crypto?.randomUUID() || `offer${ind}`;
		allOfferDetails[newOfferId] = getOfferBasedConfig([configDetails]);
	});
	Object.entries(allOfferDetails).forEach(([offerId, offerDetails]: [offerId: any, offerDetails: any]) => {
		let offerAppliedProducts: any = {};
		Object.entries(offerDetails).forEach(([offerCategory, offerConfigDetails]: [offerCategory: any, offerConfigDetails: any]) => {
			if (offerConfigDetails.length === 0) return
			
			switch(offerCategory) {
				case "automaticOffers":
					offerAppliedProducts = getAutomaticOfferProducts(offerConfigDetails, lineItems, offerAppliedProducts);
					alert(JSON.stringify({offerAppliedProducts}));
					break;
				case "buyXGetY":
					offerAppliedProducts = getBuyXChooseYOfferProducts(offerConfigDetails, lineItems, offerAppliedProducts)
					break;
				case "percentageDiscount":
					offerAppliedProducts = getPercentageOfferProducts(offerConfigDetails, lineItems, offerAppliedProducts)
					break;
				case "flatDiscount": 
					offerAppliedProducts = getFlatOfferProducts(offerConfigDetails, lineItems, offerAppliedProducts)
					break;
				default:
					break;
			}
		})

		let displayTextArray: any[] = [];

		Object.values(offerAppliedProducts).forEach((productDetails: any) => {
			const { variantId, displayTextDetails = [], displayText = '', customAttributes } = productDetails;
			[...displayTextDetails, displayText].forEach((textContent: any) => {
				if(!displayTextArray.includes(textContent) && textContent) {
					displayTextArray = [...displayTextArray, textContent];
				}
			});
			offerAppliedProducts[variantId] = {
				...productDetails,
				customAttributes
			}
		})
		flowObj[offerId] = {
			offerAppliedProducts,
			displayTextArray
		};
	});

	const { discountPrice, offerAppliedDetails, displayTextArray }: { discountPrice: any, offerAppliedDetails: any, displayTextArray : any } =  Object.entries(flowObj).reduce((offerDetail: any, [offerId, appliedOfferDetails] : [offerId: any, appliedOfferDetails: any]) => {
		const { discountPrice } = offerDetail;
		const { offerAppliedProducts, displayTextArray } = appliedOfferDetails;
		const offerDiscountPrice = getOfferDiscountPrice(Object.values(offerAppliedProducts));
		if(offerDiscountPrice > discountPrice) {
			return {
				discountPrice: offerDiscountPrice,
				offerAppliedDetails: offerAppliedProducts,
				displayTextArray
			}
		}
		return offerDetail
	}, {
		discountPrice: 0,
		offerAppliedDetails: {},
		displayTextArray: []
	});

	const displayTextHtml = constructDisplayTextHtml(displayTextArray);

	const offerRemovedDetails = Object.keys(removedProductDetails).reduce((details: any, productVariantId: string) => {
		if(offerAppliedDetails[productVariantId]) return details;
		return {
			...details,
			[productVariantId]: removedProductDetails[productVariantId]
		}
	}, {});
	const finalResult: any = {
		discountPrice,
		offerAppliedDetails,
		offerRemovedDetails,
		displayTextHtml
	};
	alert(JSON.stringify({finalResult}));
	return finalResult;
	} catch(e: any) {
		alert(e.message);
	}
}

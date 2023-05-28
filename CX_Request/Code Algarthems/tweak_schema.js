/*

Tweak need two node:-

One for store UI Blocks and UI customisation
Another one for store Location and enviroiment based the UI Blocks

*/

var schema_for_blocks = {
	"custom": {
		"id": {
			"name": { "type": "string" },
			"id": { "type": "string" },
			"data": { "type": "string" },
			"createdAt": { "type": "string" },
			"modifiedAt": { "type": "string" },
			"page": { "type": "string" },
			"criteria": { "type": "object" }
		}
	},
	"in-built": {
		"id": {
			"name": { "type": "string" },
			"id": { "type": "string" },
			"componentName": { "type": "string" },
			"config": { "type": "object" },
			"createdAt": { "type": "string" },
			"modifiedAt": { "type": "string" },
			"page": { "type": "string" },
			"criteria": { "type": "object" }
		}
	}
}


var schema_for_locations = {
    "pdp" : {
        "custom": {
            "above_image_curseol" :{
                "sandbox": { "type": "array", "value": "associates ids of blocks" },
                "production": { "type": "array", "value": "associates ids of blocks" }
            }
        },
        "in-build": {
            "productName" :{
                "sandbox": { "type": "array", "value": "associates ids of blocks" },
                "production": { "type": "array", "value": "associates ids of blocks" }
            },
            "sellingPrice" :{
                "sandbox": { "type": "array", "value": "associates ids of blocks" },
                "production": { "type": "array", "value": "associates ids of blocks" }
            }
        }
    },
    "cart" : {
        "custom": {
            "above_cart_item" :{
                "sandbox": { "type": "array", "value": "associates ids of blocks" },
                "production": { "type": "array", "value": "associates ids of blocks" }
            }
        },
        "in-build": {
            "wishList" :{
                "sandbox": { "type": "array", "value": "associates ids of blocks" },
                "production": { "type": "array", "value": "associates ids of blocks" }
            },
            "checkOutButton" :{
                "sandbox": { "type": "array", "value": "associates ids of blocks" },
                "production": { "type": "array", "value": "associates ids of blocks" }
            }
        }
    }
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductSchema = exports.deleteProductSchema = exports.updateProductSchema = exports.createProductSchema = void 0;
const zod_1 = require("zod");
const payload = {
    body: (0, zod_1.object)({
        title: (0, zod_1.string)({
            required_error: 'Title is required'
        }),
        productId: (0, zod_1.string)({
            required_error: 'ProductId is required'
        }),
        description: (0, zod_1.string)({
            required_error: 'Description is required'
        }),
        price: (0, zod_1.number)({
            required_error: 'Price is required'
        }),
        image: (0, zod_1.string)({
            required_error: 'Image is required'
        })
    })
};
const params = {
    params: (0, zod_1.object)({
        productId: (0, zod_1.string)({
            required_error: "productId is required"
        })
    })
};
exports.createProductSchema = (0, zod_1.object)({
    ...payload
});
exports.updateProductSchema = (0, zod_1.object)({
    ...payload,
    ...params
});
exports.deleteProductSchema = (0, zod_1.object)({
    ...params
});
exports.getProductSchema = (0, zod_1.object)({
    ...params
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductHandler = exports.updateProductHandler = exports.getProductHandler = exports.createProductHandler = void 0;
const product_service_1 = require("../service/product.service");
async function createProductHandler(req, res) {
    const userId = res.locals.user._id;
    const body = req.body;
    const product = await (0, product_service_1.createProduct)({ ...body, user: userId });
    return res.status(200).send(product);
}
exports.createProductHandler = createProductHandler;
async function getProductHandler(req, res) {
    const productId = req.params.productId;
    const product = await (0, product_service_1.findProduct)({ productId });
    if (!product) {
        return res.sendStatus(404);
    }
    return product;
}
exports.getProductHandler = getProductHandler;
async function updateProductHandler(req, res) {
    const userId = res.locals.user._id;
    const productId = req.params.productId;
    const update = req.body;
    const product = await (0, product_service_1.findProduct)({ productId });
    if (!product) {
        return res.sendStatus(404);
    }
    if (String(product.user) !== userId) {
        return res.sendStatus(403);
    }
    const updatedProduct = await (0, product_service_1.findAndUpdateProduct)({ productId }, update, { new: true });
    return res.status(200).send(updatedProduct);
}
exports.updateProductHandler = updateProductHandler;
async function deleteProductHandler(req, res) {
    const userId = res.locals.user._id;
    const productId = req.params.productId;
    const product = await (0, product_service_1.findProduct)({ productId });
    if (!product) {
        return res.sendStatus(404);
    }
    if (String(product.user) !== userId) {
        return res.sendStatus(403);
    }
    await (0, product_service_1.deleteProduct)({ productId });
    return res.sendStatus(200);
}
exports.deleteProductHandler = deleteProductHandler;

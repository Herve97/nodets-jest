"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.findAndUpdateProduct = exports.findProduct = exports.createProduct = void 0;
const product_model_1 = __importDefault(require("../models/product.model"));
async function createProduct(input) {
    return product_model_1.default.create(input);
}
exports.createProduct = createProduct;
async function findProduct(query, options = { lean: true }) {
    return product_model_1.default.findOne(query, {}, options);
}
exports.findProduct = findProduct;
async function findAndUpdateProduct(query, update, options) {
    return product_model_1.default.findOne(query, update, options);
}
exports.findAndUpdateProduct = findAndUpdateProduct;
async function deleteProduct(query) {
    return product_model_1.default.deleteOne(query);
}
exports.deleteProduct = deleteProduct;
// DocumentDefinition<Omit<ProductDocument, "createdAt" | "updatedAt">>

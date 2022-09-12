"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUser = exports.validatePassword = exports.createUser = void 0;
const lodash_1 = require("lodash");
const user_model_1 = __importDefault(require("../models/user.model"));
async function createUser(input) {
    try {
        const user = await user_model_1.default.create(input);
        return (0, lodash_1.omit)(user.toJSON(), "password");
    }
    catch (error) {
        throw new Error(error);
    }
}
exports.createUser = createUser;
async function validatePassword({ email, password }) {
    const user = await user_model_1.default.findOne({ email });
    // console.log("Mon user: ", user)
    if (!user) {
        return false;
    }
    const isValid = await user.comparePassword(password);
    if (!isValid) {
        return false;
    }
    return (0, lodash_1.omit)(user.toJSON(), "password");
}
exports.validatePassword = validatePassword;
async function findUser(query) {
    return user_model_1.default.findOne(query).lean();
}
exports.findUser = findUser;
// DocumentDefinition<Omit<UserDocument, "_id" | "createdAt" | "updatedAt" | "comparePassword">>

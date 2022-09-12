"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserHandler = void 0;
const user_service_1 = require("../service/user.service");
const lodash_1 = require("lodash");
async function createUserHandler(req, res) {
    try {
        const user = await (0, user_service_1.createUser)(req.body);
        return res.send((0, lodash_1.omit)(user.toJSON(), "password"));
    }
    catch (error) {
        console.log(error);
        return res.status(409).send(error.message);
    }
}
exports.createUserHandler = createUserHandler;

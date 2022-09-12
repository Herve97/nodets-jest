"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeUser = void 0;
const lodash_1 = require("lodash");
const session_service_1 = require("../service/session.service");
const jwt_utils_1 = require("../utils/jwt.utils");
const deserializeUser = async (req, res, next) => {
    const accessToken = (0, lodash_1.get)(req, "headers.authorization", "").replace(/^Bearer\s/, "");
    const refreshToken = (0, lodash_1.get)(req, "headers.x-refresh");
    if (!accessToken) {
        return next();
    }
    // console.log("My accessToken: ", accessToken)
    const { decoded, expired } = (0, jwt_utils_1.verifyJwt)(accessToken);
    // console.log("decoded: ", decoded);
    if (decoded) {
        res.locals.user = decoded;
        return next();
    }
    if (expired && refreshToken) {
        const newAccessToken = await (0, session_service_1.reIssueAccessToken)({ refreshToken });
        if (newAccessToken) {
            res.setHeader('x-access-token', newAccessToken);
        }
        const result = (0, jwt_utils_1.verifyJwt)(newAccessToken);
        res.locals.user = result.decoded;
        return next();
    }
    return next();
};
exports.deserializeUser = deserializeUser;

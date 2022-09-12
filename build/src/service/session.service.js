"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reIssueAccessToken = exports.updateSession = exports.findSessions = exports.createSession = void 0;
const session_model_1 = __importDefault(require("../models/session.model"));
const jwt_utils_1 = require("../utils/jwt.utils");
const lodash_1 = require("lodash");
const user_service_1 = require("./user.service");
const config_1 = __importDefault(require("config"));
async function createSession(userId, userAgent) {
    // console.log("Mon user id: ", userId)
    const session = await session_model_1.default.create({ user: userId, userAgent });
    return session.toJSON();
}
exports.createSession = createSession;
async function findSessions(query) {
    // console.log("The query: ", query)
    return session_model_1.default.find(query).lean();
}
exports.findSessions = findSessions;
async function updateSession(query, update) {
    return session_model_1.default.updateOne(query, update);
}
exports.updateSession = updateSession;
async function reIssueAccessToken({ refreshToken }) {
    const { decoded } = (0, jwt_utils_1.verifyJwt)(refreshToken);
    if (!decoded || !(0, lodash_1.get)(decoded, "_id")) {
        return false;
    }
    const session = await session_model_1.default.findById((0, lodash_1.get)(decoded, "_id"));
    if (!session || !session.valid) {
        return false;
    }
    const user = await (0, user_service_1.findUser)({ id: session.user });
    if (!user) {
        return false;
    }
    // create an access token
    const accessToken = (0, jwt_utils_1.signJwt)({ ...user, session: session._id }, { expiresIn: config_1.default.get("accessTokenTtl") });
    return accessToken;
}
exports.reIssueAccessToken = reIssueAccessToken;

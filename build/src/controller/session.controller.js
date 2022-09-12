"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSessionHandler = exports.getUserSessionHandler = exports.createUserSessionHandler = void 0;
const session_service_1 = require("../service/session.service");
const user_service_1 = require("../service/user.service");
const jwt_utils_1 = require("../utils/jwt.utils");
const config_1 = __importDefault(require("config"));
async function createUserSessionHandler(req, res) {
    // console.log("Mon body create session: ", req.body)
    // Validate the user's password
    const user = await (0, user_service_1.validatePassword)(req.body);
    // console.log("Mon user dans session handler: ", user);
    if (!user) {
        return res.status(401).send("Invalid email or password");
    }
    //create a session
    const session = await (0, session_service_1.createSession)(user._id, req.get("user-agent") || "");
    // console.log("Ma session: ", session);
    // create an access token
    const accessToken = (0, jwt_utils_1.signJwt)({ ...user, session: session._id }, { expiresIn: config_1.default.get("accessTokenTtl") });
    // create a refresh token
    const refreshToken = (0, jwt_utils_1.signJwt)({
        ...user, session: session._id
    }, { expiresIn: config_1.default.get("refreshTokenTtl") });
    // return access & refresh tokens
    return res.status(200).send({ accessToken, refreshToken });
}
exports.createUserSessionHandler = createUserSessionHandler;
async function getUserSessionHandler(req, res) {
    const userId = res.locals.user._id;
    const sessions = await (0, session_service_1.findSessions)({ user: userId, valid: true });
    console.log("My sessions: ", sessions);
    return res.send(sessions);
}
exports.getUserSessionHandler = getUserSessionHandler;
async function deleteSessionHandler(req, res) {
    const sessionId = res.locals.user.session;
    await (0, session_service_1.updateSession)({ _id: sessionId }, { valid: false });
    res.send({
        accessToken: null,
        refreshToken: null
    });
}
exports.deleteSessionHandler = deleteSessionHandler;

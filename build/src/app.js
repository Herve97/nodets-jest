"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("config"));
const connect_1 = __importDefault(require("./utils/connect"));
// import logger from "./utils/logger";
const routes_1 = __importDefault(require("./routes"));
const deserializeUser_1 = require("./middleware/deserializeUser");
const port = config_1.default.get("port");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(deserializeUser_1.deserializeUser);
app.listen(port, async () => {
    console.log(`i'm running on port: ${port}`);
    await (0, connect_1.default)();
    (0, routes_1.default)(app);
});

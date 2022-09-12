"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("config"));
const userSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
/**
 * Cette fonction de mongoose permet de hasher automatiquement le mot de passe lors de l'enregistrement
 */
userSchema.pre("save", async function (next) {
    let user = this;
    // let user = this as unknown as UserDocument;
    // console.log("Mon user: ", user);
    // console.log("Mon user modified password: ", user.isModified("password"));
    // console.log("Mon user not modified password: ", !user.isModified("password"));
    if (!user.isModified("password")) {
        return next();
    }
    const salt = await bcrypt_1.default.genSalt(config_1.default.get("saltWorkFactor"));
    const hash = await bcrypt_1.default.hash(user.password, salt);
    user.password = hash;
    return next();
});
/**
 * Création d'une méthode qui compare le mot de passe hasher dans la db et le mot de passe taper
 * lors de l'authentification
*/
userSchema.methods.comparePassword = async function (candidatePassword) {
    const user = this;
    return bcrypt_1.default.compare(candidatePassword, user.password).catch(error => false);
};
const UserModel = mongoose_1.default.model('Users', userSchema);
exports.default = UserModel;

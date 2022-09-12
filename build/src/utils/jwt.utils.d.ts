import jwt from "jsonwebtoken";
export declare function signJwt(object: Object, options?: jwt.SignOptions | undefined): string;
export declare function verifyJwt(token: string): {
    valid: boolean;
    expired: boolean;
    decoded: string | jwt.JwtPayload;
} | {
    valid: boolean;
    expired: boolean;
    decoded: null;
};

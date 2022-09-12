import jwt from "jsonwebtoken";
import config from "config";

const privateKey = config.get<string>("accessTokenPrivateKey");
const publicKey = config.get<string>("accessTokenPublicKey");

export function signJwt(object: Object, options?: jwt.SignOptions | undefined){
  // console.log("Mes object: ", object);
  // console.log("Mes options: ", options);

  // console.log("my private key: ", privateKey)
  
  return jwt.sign(object, privateKey, {
    ...(options && options),
    algorithm: "RS256"
  })
}

export function verifyJwt(token: string){
  try {
    const decoded = jwt.verify(token, publicKey)
    return {
      valid: true,
      expired: false,
      decoded
    }
  } catch (error: any) {
    return {
      valid: false,
      expired: error.message === "jwt expired",
      decoded: null
    }
  }
}
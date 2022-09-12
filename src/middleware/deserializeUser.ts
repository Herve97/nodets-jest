import {Request, Response, NextFunction} from "express";
import {get} from "lodash";
import { reIssueAccessToken } from "../service/session.service";
import { verifyJwt } from "../utils/jwt.utils";

export const deserializeUser = async(req: Request, res: Response, next: NextFunction)=>{

  const accessToken = get(req, "cookies.accessToken") || get(req, "headers.authorization", "").replace(/^Bearer\s/, "");

  const refreshToken = get(req, "cookies.accessToken") || get(req, "headers.x-refresh")

  // console.log({accessToken})

  if(!accessToken){
    return next();
  }

  // console.log("My accessToken: ", accessToken)

  const {decoded, expired} = verifyJwt(accessToken);

  // console.log("decoded: ", decoded);

  if(decoded){
    res.locals.user = decoded;
    return next();
  }

  if(expired && refreshToken){
    const newAccessToken: any = await reIssueAccessToken({refreshToken});

    if(newAccessToken){
      res.setHeader('x-access-token', newAccessToken);

      res.cookie("accessToken", newAccessToken, {
        maxAge: 90000, // 15 mins
        httpOnly: true,
        domain: 'localhost',
        path: '/',
        sameSite: 'strict',
        secure: false
      });
    }

    const result = verifyJwt(newAccessToken);

    res.locals.user = result.decoded;
    return next();
  }

  return next();

}
import { DocumentDefinition, FilterQuery, UpdateQuery } from 'mongoose';
import SessionModel, {SessionDocument} from '../models/session.model';
import { verifyJwt, signJwt } from '../utils/jwt.utils';
import {get} from "lodash";
import { findUser } from './user.service';
import config from "config";

export async function createSession(userId: string, userAgent: string){
  // console.log("Mon user id: ", userId)
  const session = await SessionModel.create({user: userId, userAgent});
  return session.toJSON();
}

export async function findSessions(query: FilterQuery<SessionDocument>){

  // console.log("The query: ", query)
  return SessionModel.find(query).lean();

}

export async function updateSession(query: FilterQuery<SessionDocument>, update: UpdateQuery<SessionDocument>){

  return SessionModel.updateOne(query, update);

}

export async function reIssueAccessToken({refreshToken}:{refreshToken: string}){
  const {decoded} = verifyJwt(refreshToken);

  if(!decoded || !get(decoded, "_id")){
    return false;
  }

  const session = await SessionModel.findById(get(decoded, "_id")); 

  if(!session || !session.valid){
    return false;
  }

  const user = await findUser({id: session.user})

  if(!user){
    return false;
  }

  // create an access token
  const accessToken = signJwt(
    {...user, session: session._id},
    {expiresIn: config.get("accessTokenTtl")}
  );

  return accessToken;

}
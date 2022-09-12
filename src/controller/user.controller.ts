import {Request, Response} from "express";
import { CreateUserInput } from "../schema/user.schema";
import { createUser } from "../service/user.service";
import {omit} from "lodash";

export async function createUserHandler(req: Request<{}, {}, CreateUserInput["body"]>, res: Response){

  try {
    const user = await createUser(req.body);
    // return res.send(omit(user, "password"));
    return res.send(user);
  } catch (error: any) {
    console.log(error);
    return res.status(409).send(error.message);
  }

}

export async function getCurrentUser(req: Request, res: Response){
  return res.send(res.locals.user);
}
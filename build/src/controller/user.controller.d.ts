import { Request, Response } from "express";
import { CreateUserInput } from "../schema/user.schema";
export declare function createUserHandler(req: Request<{}, {}, CreateUserInput["body"]>, res: Response): Promise<Response<any, Record<string, any>>>;

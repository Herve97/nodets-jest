import { Request, Response } from "express";
export declare function createUserSessionHandler(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getUserSessionHandler(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function deleteSessionHandler(req: Request, res: Response): Promise<void>;

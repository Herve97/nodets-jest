/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { Request, Response } from "express";
import { createProductInput, deleteProductInput, getProductInput, updateProductInput } from '../schema/product.schema';
export declare function createProductHandler(req: Request<{}, {}, createProductInput["body"]>, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getProductHandler(req: Request<getProductInput["params"]>, res: Response): Promise<(import("../models/product.model").ProductDocument & {
    _id: import("mongoose").Types.ObjectId;
}) | Response<any, Record<string, any>>>;
export declare function updateProductHandler(req: Request<updateProductInput["params"]>, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function deleteProductHandler(req: Request<deleteProductInput["params"]>, res: Response): Promise<Response<any, Record<string, any>>>;

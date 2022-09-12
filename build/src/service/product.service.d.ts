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
/// <reference types="mongoose/types/inferschematype" />
import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import { ProductDocument, ProductInput } from "../models/product.model";
export declare function createProduct(input: ProductInput): Promise<ProductDocument & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare function findProduct(query: FilterQuery<ProductDocument>, options?: QueryOptions): Promise<(ProductDocument & {
    _id: import("mongoose").Types.ObjectId;
}) | null>;
export declare function findAndUpdateProduct(query: FilterQuery<ProductDocument>, update: UpdateQuery<ProductDocument>, options: QueryOptions): Promise<(ProductDocument & {
    _id: import("mongoose").Types.ObjectId;
}) | null>;
export declare function deleteProduct(query: FilterQuery<ProductDocument>): Promise<import("mongodb").DeleteResult>;

import mongoose from 'mongoose';
import { UserDocument } from './user.model';
export interface ProductInput {
    productId: string;
    user: UserDocument["_id"];
    title: string;
    description: string;
    price: number;
    image: string;
}
export interface ProductDocument extends ProductInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
}
declare const ProductModel: mongoose.Model<ProductDocument, {}, {}, {}, any>;
export default ProductModel;

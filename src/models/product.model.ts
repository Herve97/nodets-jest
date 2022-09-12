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

export interface ProductDocument extends ProductInput, mongoose.Document{
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new mongoose.Schema({
  productId:{
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price:{
    type: Number,
    required: true
  },
  image:{
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  }

}, {
  timestamps: true
});


const ProductModel = mongoose.model<ProductDocument>('Products', productSchema);

export default ProductModel;
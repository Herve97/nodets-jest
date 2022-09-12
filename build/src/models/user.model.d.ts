import mongoose from 'mongoose';
export interface UserInput {
    email: string;
    name: string;
    password: string;
}
export interface UserDocument extends UserInput, mongoose.Document {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidatePassword: string): Promise<boolean>;
}
declare const UserModel: mongoose.Model<UserDocument, {}, {}, {}, any>;
export default UserModel;

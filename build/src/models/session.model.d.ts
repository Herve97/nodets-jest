import mongoose from 'mongoose';
import { UserDocument } from './user.model';
export interface SessionDocument extends mongoose.Document {
    _id: string;
    user: UserDocument["_id"];
    valid: boolean;
    userAgent: string;
    createdAt: Date;
    updatedAt: Date;
}
declare const SessionModel: mongoose.Model<SessionDocument, {}, {}, {}, any>;
export default SessionModel;

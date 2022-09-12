import mongoose from 'mongoose';
import { UserDocument } from './user.model';

export interface SessionDocument extends mongoose.Document{
  _id: string;
  user: UserDocument["_id"];
  valid: boolean;
  userAgent: string;
  createdAt: Date;
  updatedAt: Date;
}

const sessionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  },
  valid: {
    type: Boolean,
    default: true
  },
  userAgent: {
    type: String
  }
  
}, {
  timestamps: true
});


const SessionModel = mongoose.model<SessionDocument>('Sessions', sessionSchema);

export default SessionModel;
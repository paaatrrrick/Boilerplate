import mongoose from 'mongoose';
import { User } from '../types/models';

const Schema = mongoose.Schema;
const UserSchema = new Schema<User>({
    email: { type: String, optional: false },
    dateCreate: { type: Date, default: Date.now },
    name: { type: String, optional: false },
    profilePicture: { type: String, optional: true },
});

export default mongoose.model('users', UserSchema);
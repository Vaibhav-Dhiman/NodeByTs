import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    password: String,
    address: String,
    createdDate: { type: Date, default: Date.now},
    isActive: { type: Boolean, default: true },
    isDelete: { type: Boolean, default: false },
})
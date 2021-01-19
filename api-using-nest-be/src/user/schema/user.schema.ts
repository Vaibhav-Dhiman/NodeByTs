import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: Number,
    password: String,
    address: String,
    created_date: { type: Date, default: Date.now}
})
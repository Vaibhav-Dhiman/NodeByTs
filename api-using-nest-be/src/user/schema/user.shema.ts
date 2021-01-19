import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    id: String,
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    phone: String,
    address: String,
    created_at: { type: Date, default: Date.now }
})
import * as mongoose from 'mongoose';

export const AirfareSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
});

export interface Airfare extends mongoose.Document {
         id:string;
         title: string;
         description: string; 
         price: number;
}


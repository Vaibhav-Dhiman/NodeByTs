import * as mongoose from 'mongoose';

export const PriceSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
});

export interface Price extends mongoose.Document {
         id:string;
         title: string;
         description: string; 
         price: number;
}


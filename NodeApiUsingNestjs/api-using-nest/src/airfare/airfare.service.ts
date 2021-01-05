import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Airfare } from './airfare.model';
import { FindFlightstDTO } from './dtos/airfarePost.dto';

@Injectable()
export class AirFareService {
   private products: Airfare[]= [];
   constructor(
    @InjectModel('Product') private readonly productModel: Model<Airfare>,
  ) {}
    async findFlights(findFlightstDTO: FindFlightstDTO) {
        const newProduct = new this.productModel({
                             title: findFlightstDTO.title, 
                             description: findFlightstDTO.description, 
                             price: findFlightstDTO.price
                           });
        const result = await newProduct.save();
        return result.id;
    }
}
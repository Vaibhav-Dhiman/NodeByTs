import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { AirFareService } from './airfare.service';
import { FindFlightstDTO } from './dtos/airfarePost.dto';

@Controller('airfare')
export class ProductsController {
    constructor(private readonly productService: AirFareService) {}

    @Post()
   async findFlights(
        @Body() findFlightstDTO: FindFlightstDTO) {
       const generatedId = await this.productService.findFlights(findFlightstDTO);
       return {id:generatedId as string};
    }
}


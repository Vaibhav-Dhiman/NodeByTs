import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { AirFareService } from './price.service';

@Controller('airfare')
export class AirfareController {
    constructor(private readonly productService: AirFareService) {}

    @Get('/getflights')
    async getAllFlights()  {
        const products = await this.productService.findFlights();
        return products;
    }
}


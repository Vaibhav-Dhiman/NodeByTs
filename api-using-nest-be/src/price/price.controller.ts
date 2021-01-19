import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { PriceService } from './price.service';

@Controller('price')
export class PriceController {
    constructor(private readonly priceService: PriceService) {}

    @Get('/getprice')
    async getAllPrice()  {
        const products = await this.priceService.findFlights();
        return products;
    }
}


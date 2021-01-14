import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get('/getproducts')
    async getAllProducts()  {
        const products = await this.productService.findProducts();
        return products;
    }
}


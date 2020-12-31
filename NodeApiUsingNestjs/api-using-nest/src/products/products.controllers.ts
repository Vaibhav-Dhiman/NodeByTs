import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { title } from 'process';
import { Product } from './product.model';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) {}

    @Post()
    addProduct(
        @Body('title') prodTitle: string, 
        @Body('description') description: string,
        @Body('price') price: number,
        ): any {
       const generatedId = this.productService.insertProduct(title,description,price);
       return {id: generatedId};
    }

    @Get()
    getAllProducts()  {
        const products = this.productService.getAllProducts();
        return {Product: products};
    }

    @Get(':id')
    getProduct(@Param('id') prodId: string) {
        const product = this.productService.getProduct(prodId);
        return {Product: product};
    }
}


import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common';
import { title } from 'process';
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

    @Patch(':id')
    updateProduct(
        @Param('id') prodId: string,
        @Body('title') prodTitle: string,
        @Body('description') prodDescription: string,
        @Body('price') prodPrice: number,
    ) {
        this.productService.updateProduct(prodId,prodTitle,prodDescription, prodPrice);
    }
}


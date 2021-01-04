import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { title } from 'process';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) {}

    @Post()
   async addProduct(
        @Body('title') prodTitle: string, 
        @Body('description') description: string,
        @Body('price') price: number,
        ) {
       const generatedId = await this.productService.insertProduct(title,description,price);
       return {id:generatedId as string};
    }

    @Get()
    async getAllProducts()  {
        const products = await this.productService.getAllProducts();
        return products;
    }

    @Get(':id')
    async getProduct(@Param('id') prodId: string) {
        const product = await this.productService.getProduct(prodId);
        return {Product: product};
    }

    @Patch(':id')
    updateProduct(
        @Param('id') prodId: string,
        @Body('title') prodTitle: string,
        @Body('description') prodDescription: string,
        @Body('price') prodPrice: number,
    ) {
        return this.productService.updateProduct(prodId,prodTitle,prodDescription, prodPrice);
    }

    @Delete(':id')
    deleteProduct(@Param('id') prodId: string) {
        return this.productService.deleteProduct(prodId);
    }
}


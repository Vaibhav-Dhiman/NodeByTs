import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './dtos/create-product.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) {}

    @Post()
   async addProduct(
        @Body() createProductDTO: CreateProductDTO) {
       const generatedId = await this.productService.insertProduct(createProductDTO);
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
   async  updateProduct(
        @Param('id') prodId: string,
        @Body() updateProductDTO: CreateProductDTO) {
        return await this.productService.updateProduct(prodId,updateProductDTO);
    }

    @Delete(':id')
   async deleteProduct(@Param('id') prodId: string) {
        return await this.productService.deleteProduct(prodId);
    }
}


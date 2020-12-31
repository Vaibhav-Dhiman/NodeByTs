import { Controller, Post, Body } from '@nestjs/common';
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
}


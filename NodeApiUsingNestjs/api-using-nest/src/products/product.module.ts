import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './product.model';

import { ProductsController } from './products.controllers';
import { ProductsService } from './products.service';

@Module({
    imports: [],
    controllers: [ProductsController],
    providers: [ProductsService]
})

export class ProductsModule{}
import { Module } from '@nestjs/common';
import { ProductsModule } from './products/product.module';
import { ProductsController } from './products/products.controllers';
import { ProductsService } from './products/products.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ProductsModule, MongooseModule.forRoot('mongodb+srv://vaibhav:E1Vsz4A1ATrq3wDO@cluster0.4ttpq.mongodb.net/nestjs-demo?retryWrites=true&w=majority')],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class AppModule {}

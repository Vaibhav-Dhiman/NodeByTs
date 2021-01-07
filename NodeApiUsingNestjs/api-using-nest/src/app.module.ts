import { Module } from '@nestjs/common';
import { ProductsModule } from './products/product.module';
import { MongooseModule } from '@nestjs/mongoose';

// mongodb://127.0.0.1:27017/book
@Module({
  // imports: [ProductsModule, MongooseModule.forRoot('mongodb+srv://vaibhav:E1Vsz4A1ATrq3wDO@cluster0.4ttpq.mongodb.net/nestjs-demo?retryWrites=true&w=majority')],
  imports: [ProductsModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017/products')],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AirfareModule } from './airfare/airfare.module';
import { ProductsModule } from './products/product.module';

// mongodb://127.0.0.1:27017/book
@Module({
  imports: [ProductsModule, AirfareModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

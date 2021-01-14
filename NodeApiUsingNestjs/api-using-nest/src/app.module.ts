import { Module } from '@nestjs/common';
import { AirfareModule } from './airfare/airfare.module';
import {ProductModule} from './product/product.module';
// mongodb://127.0.0.1:27017/book
@Module({
  imports: [AirfareModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

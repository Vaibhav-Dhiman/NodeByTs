import { Module } from '@nestjs/common';
import { PriceModule } from './price/price.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';

// mongodb://127.0.0.1:27017/book
@Module({
  imports: [PriceModule, ProductModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

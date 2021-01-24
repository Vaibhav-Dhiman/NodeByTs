import { Module } from '@nestjs/common';
import { PriceModule } from './price/price.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
//import { AuthModule } from './auth/auth.module';

// mongodb://127.0.0.1:27017/book
@Module({
  imports: [
    PriceModule, 
    ProductModule, 
    UserModule, 
    //AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ProductsModule } from './products/product.module';
import { ProductsController } from './products/products.controllers';
import { ProductsService } from './products/products.service';

@Module({
  imports: [ProductsModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class AppModule {}

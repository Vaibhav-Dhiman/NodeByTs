import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    async findProducts() {
       return 'product service called'
    }
}
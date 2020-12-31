import { Injectable,NotFoundException } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
   private products: Product[]= [];

    insertProduct(title: string, desc:string, price: number) {
        const prodId = Math.random().toString();
        const newProduct = new Product(prodId, title, desc, price);
        this.products.push(newProduct);
        return prodId;
    }

    getAllProducts() {
        const products = [...this.products];
        return products;
    }

    getProduct(id: string) {
        const products = [...this.products];
        const product = products.find((prod) => prod.id === id);
        if(!product) {
            throw new NotFoundException('Product not found');
        }
        return product;
    }
}
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
        const product = this.findProduct(id)[0];
        return product;
    }

    updateProduct(productId: string, title: string, description: string, price:number) {
        const [product,index] = this.findProduct(productId);
        const updatedProduct = {...product};
        if(title) {
            updatedProduct.title = title;
        }
        if(description) {
            updatedProduct.description = description;
        }
        if(price) {
            updatedProduct.price = price;
        }

        this.products[index] = updatedProduct;
        return updatedProduct;
    }

    deleteProduct(prodId: string) {
        const prodIndex = this.findProduct(prodId)[1];
        this.products.splice(prodIndex,1);
    }

    findProduct(id: string) : [Product, number]{
        const productIndex = this.products.findIndex((prod) => prod.id === id);
        const product = this.products[productIndex];
        if(!product) {
            throw new NotFoundException('Product not found');
        }
        return [product, productIndex];
    }
}
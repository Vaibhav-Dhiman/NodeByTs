import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
   private products: Product[]= [];

   constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

    async insertProduct(title: string, desc:string, price: number) {
        // const prodId = Math.random().toString();
        const newProduct = new this.productModel({title, description: desc, price});
        // this.products.push(newProduct);
        const result = await newProduct.save();
        return result.id;
    }

    async getAllProducts() {
        const products  = await this.productModel.find().exec();
        return products.map(propd => ({
            id: propd.id, 
            title: propd.title,
            description: propd.description, 
            price: propd.price
        }));
    }

    async getProduct(id: string) {
        const product = await this.findProduct(id);
        return {
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price
        };
    }

   async  updateProduct(productId: string, title: string, description: string, price:number) {
        const updatedProduct = await this.findProduct(productId);

        if(title) {
           updatedProduct.title = title;
        }
        if(description) {
           updatedProduct.description = description;
        }
        if(price) {
           updatedProduct.price = price;
        }
        updatedProduct.save();
        return updatedProduct;
    }

    deleteProduct(prodId: string) {
        //const prodIndex = this.findProduct(prodId)[1];
       // this.products.splice(prodIndex,1);
    }

   private async findProduct(id: string) : Promise<Product> {
    let product;
    try {
      product = await this.productModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find product.');
    }
    if (!product) {
      throw new NotFoundException('Could not find product.');
    }
    return product;
    
    }
}
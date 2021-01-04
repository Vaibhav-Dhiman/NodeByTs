import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.model';
import { CreateProductDTO } from './dtos/create-product.dto';

@Injectable()
export class ProductsService {
   private products: Product[]= [];

   constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

    async insertProduct(createProductDTO: CreateProductDTO) {
        // const prodId = Math.random().toString();
        const newProduct = new this.productModel({title: createProductDTO.title, 
                                description: createProductDTO.description, price: createProductDTO.price});
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

   async  updateProduct(productId: string, updateProductDTO: CreateProductDTO) {
        const updatedProduct = await this.findProduct(productId);

        if(updateProductDTO.title) {
           updatedProduct.title = updateProductDTO.title;
        }
        if(updateProductDTO.description) {
           updatedProduct.description = updateProductDTO.description;
        }
        if(updateProductDTO.price) {
           updatedProduct.price = updateProductDTO.price;
        }
        updatedProduct.save();
        return updatedProduct;
    }

    async deleteProduct(prodId: string) {
        const result = await this.productModel.deleteOne({_id: prodId}).exec();
        if(result.n === 0 ) {
            throw new NotFoundException('Product Not Found');
        }
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
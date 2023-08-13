import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/schemas/product.schema';
import { CreateProductDto } from './dtos/create-product.dto';
import {startCase} from "lodash"

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel:Model<Product>){}

    async createProduct(createProductDto:CreateProductDto){
        const createdProduct = new this.productModel(createProductDto)
        return createdProduct.save()

    }

    async getAllProducts(){
        return this.productModel.find().lean()
    }

    async getProductByName(product:string) {
        return this.productModel.findOne({productName:startCase(product)}).exec()
    }

    
   
    
}

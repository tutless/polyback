import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Shop } from 'src/schemas/shop.schema';
import { ShopDto } from './dtos/shop.dto';
import { Model, Types } from 'mongoose';
import { defer, of } from 'rxjs';

@Injectable()
export class ShopService {
    constructor(@InjectModel(Shop.name) private shopModel:Model<Shop>){}

    saveShop(data:ShopDto){
        return of(new this.shopModel(data).save())
    }

    getAllShop(){
        return defer(async () => await this.shopModel.find().lean())

    }

    getShopById(_id:Types.ObjectId){
        return defer(async () => await this.shopModel.findById({_id}).lean())
    }
}

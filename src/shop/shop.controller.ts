import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ShopDto } from './dtos/shop.dto';
import mongoose, { Mongoose, Types } from 'mongoose';

@Controller('shop')
export class ShopController {
    constructor(private shopService:ShopService){}

    @Post()
    saveShop(@Body() shopData:ShopDto){
        return this.shopService.saveShop(shopData)
    }

    @Get()
    getAllShop(){
        return this.shopService.getAllShop()
    }

    @Get('/:id')
    getShopById(@Param('id') id:string){
        const objId = new mongoose.Types.ObjectId(id)
        return this.shopService.getShopById(objId)
    }
}

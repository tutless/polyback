import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Product } from './product.schema';
import { Staff } from './staff.schema';
import { ShopLocation } from './shop-location.schema';

export type ShopDocument = Shop & Document

@Schema()
export class Shop{

    
    @Prop({type:mongoose.Schema.Types.ObjectId, ref:'Staff'})
    staff: Staff
    @Prop()
    shopName:string;
    @Prop()
    shopLocation:ShopLocation
    @Prop()
    shopType:string;
    @Prop()
    shopDescription:string;
    @Prop()
    shopContact:string
   

}

export const ShopSchema = SchemaFactory.createForClass(Shop)
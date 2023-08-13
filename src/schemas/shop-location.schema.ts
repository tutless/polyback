import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ShopLocationDocument = HydratedDocument<ShopLocation>

@Schema()
export class ShopLocation{
    @Prop()
    city:string
    @Prop()
    street:string
    @Prop()
    unit:string
    @Prop()
    locationNumber:string
    @Prop()
    postCode:string
    
}

export const ShopLocationSchema  = SchemaFactory.createForClass(ShopLocation)
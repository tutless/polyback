import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Product } from './product.schema';
import mongoose, { Mongoose } from 'mongoose';

export type PurchaseItemDocument = PurchaseItem & Document

@Schema()
export class PurchaseItem{

    @Prop({type:mongoose.Schema.Types.ObjectId, ref:'Product'})
    product:Product
    @Prop()
    qty:number;
    @Prop()
    item:string;
    @Prop()
    unit:string;
    @Prop()
    cost:number;
    @Prop()
    totalCost:number
}

export const PurchaseItemSchema = SchemaFactory.createForClass(PurchaseItem)
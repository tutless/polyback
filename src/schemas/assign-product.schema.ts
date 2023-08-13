import { Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Product } from './product.schema';
import { Shop } from './shop.schema';

export type AssignProductDocument = HydratedDocument<AssignProduct>

class AssignProduct{
    @Prop({type:mongoose.Schema.Types.ObjectId, ref:'Product'})
    product:Product

    @Prop({type:mongoose.Schema.Types.ObjectId, ref:'Shop'})
    shop:Shop

    @Prop()
    quantity:number
    
    @Prop()
    date_assign:Date
}

export const AssignProductSchema = SchemaFactory.createForClass(AssignProduct)
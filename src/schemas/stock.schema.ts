import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Delivery } from './delivery.schema';
import { Product } from './product.schema';

export type StockDocument = HydratedDocument<Stock>

@Schema()
export class Stock{
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Delivery'})
    delivery:Delivery
    @Prop()
    product: string
    @Prop()
    quantity:number
    @Prop()
    date_in:Date
    

}

export const StockSchema = SchemaFactory.createForClass(Stock)
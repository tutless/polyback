import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PurchaseOrder } from './purchase-order.schema';
import mongoose from 'mongoose';

export type DeliveryDocument = Delivery & Document

@Schema()
export class Delivery{
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'PurchaseOrder'})
    purchase_order:PurchaseOrder
    @Prop()
    date_receive: Date
    @Prop()
    paid:boolean

   

}

export const DeliverySchema = SchemaFactory.createForClass(Delivery)
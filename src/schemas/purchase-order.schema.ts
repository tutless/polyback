import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Supplier } from './supplier.schema';
import { PurchaseItem } from './purchase-item.schema';



export type PurchaseOrderDocument = PurchaseOrder & Document

@Schema()
export class PurchaseOrder{
    @Prop(Supplier)
    supplier:Supplier
    @Prop([PurchaseItem])
    purchases: PurchaseItem[]
    @Prop()
    date:string;
    @Prop()
    ref_id:string;
    @Prop()
    details:string;
    @Prop()
    discount:number;
    @Prop()
    amount:number;
    @Prop()
    total_amount:number;
    @Prop()
    tax:number;
    @Prop()
    posted:boolean;
    @Prop()
    remarks:string;
    @Prop()
    paid:boolean
}
export const PurchaseOrderSchema = SchemaFactory.createForClass(PurchaseOrder) 
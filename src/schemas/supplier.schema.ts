import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


export type SupplierDocument = HydratedDocument<Supplier>

@Schema()
export class Supplier{

    @Prop()
    fullName:string;
    @Prop()
    phoneNumber:string;
    @Prop()
    address:string
    @Prop()
    company:string
    @Prop()
    emailAddress:string
    @Prop()
    city:string

}

export const SupplierSchema = SchemaFactory.createForClass(Supplier)
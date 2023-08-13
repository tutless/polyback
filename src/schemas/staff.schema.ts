import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type StaffDocument = Staff & Document

@Schema()
export class Staff{
    @Prop()
    staff_code:string;
    @Prop()
    firstName:string;
    @Prop()
    lastName:string;
    @Prop()
    gender:string;
    @Prop()
    systemAccess:string;
    @Prop()
    contactInfo:string
    @Prop()
    staff_user:string;
    @Prop()
    staff_password:string
}

export const StaffSchema = SchemaFactory.createForClass(Staff)
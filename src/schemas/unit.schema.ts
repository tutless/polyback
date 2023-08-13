import { Prop, SchemaFactory ,Schema} from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UnitDocument = HydratedDocument<Unit>

@Schema()
export class Unit{
    @Prop()
    unitName: string
}

export const UnitSchema = SchemaFactory.createForClass(Unit)
import { Transform } from 'class-transformer';
import { IsDateString, IsString } from 'class-validator';
import { ObjectId, Types } from 'mongoose';
import { Delivery } from 'src/schemas/delivery.schema';
import { Product } from 'src/schemas/product.schema';

export class StockDto{

    delivery:Types.ObjectId

    @IsString()
    product:string
    
    @IsString()
    @Transform(({value}) => parseInt(value))
    quantity:number

    @IsDateString()
    @Transform(({value}) => new Date(value) )
    date_in:Date


    
}
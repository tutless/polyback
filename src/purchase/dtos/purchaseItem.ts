
import { Transform } from 'class-transformer';
import { IsString } from 'class-validator';
import { Types } from 'mongoose';
import { Product } from 'src/schemas/product.schema';


export class PurchaseItem{

    @Transform(({value}) => value._id )
    product:Product
    @IsString()
    purchase_id:string
    
    @IsString()
    @Transform(({value}) => parseInt(value))
    qty:number;

    @IsString()
    item:string;
    
    @IsString()
    unit:string;

    @IsString()
    @Transform(({value}) => parseInt(value))
    cost:number;

    @IsString()
    @Transform(({value}) => parseInt(value))
    totalCost:number
}
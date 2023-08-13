import { IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';
import { PurchaseItem } from './purchaseItem';
import { Transform } from 'class-transformer';
import { Date } from 'mongoose';
import { Supplier } from 'src/schemas/supplier.schema';


export class PurchaseOrderDto{

    purchases: PurchaseItem[]
    supplier:Supplier
    @IsDateString()
    @Transform(({value}) => new Date(value))
    date:Date;

    @IsString()
    ref_id:string;

    @IsString()
    details:string;

    @IsString()
    @Transform(({value}) => parseInt(value))
    discount:number;

    @IsString()
    @Transform(({value}) => parseInt(value))
    amount:number;
    
    @IsString()
    @Transform(({value}) => parseInt(value))
    total_amount:number;

    
    @IsString()
    @Transform(({value}) => parseInt(value))
    tax:number

    @IsBoolean()
    posted:boolean

    @IsString()
    remarks:string

    @IsBoolean()
    paid:boolean

}
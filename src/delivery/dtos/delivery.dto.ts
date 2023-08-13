import { Transform } from 'class-transformer';
import { IsDateString, IsString } from 'class-validator';


export class DeliveryDto{

    @IsString()
    purchase_order:string
    
    @IsDateString()
    @Transform(({value}) => new Date(value) )
    date_receive:Date

    @IsString()
    @Transform(({value}) => value === false)
    paid:boolean
    
}
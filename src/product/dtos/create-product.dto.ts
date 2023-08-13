import { Transform } from 'class-transformer';
import { IsDateString, IsNumber, IsString } from 'class-validator';
import _, { toUpper } from 'lodash';
import { Types } from 'mongoose';

export class CreateProductDto{

   
    @IsString()
    id:string
    
    @Transform(({value}) => toUpper(value as string))
    @IsString()
    productName: string;
    
    @IsString()
    description: string;
    
    @IsString()
    productCode: string;
    
    @IsString()
    productSKU: string;
    
    @IsNumber()
    @Transform(({value}) => parseInt(value))
    priceCost: number;

    @IsNumber()
    @Transform(({value}) => parseInt(value))
    sellingPrice: number;
    
    @IsDateString()
    @Transform(({value}) => new Date(value))
    createAt: Date;

    @IsString()
    productStatus: string;
}
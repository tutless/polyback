import { Transform } from 'class-transformer';
import { IsObject, IsString } from 'class-validator';
import { Staff } from 'src/schemas/staff.schema';

export class ShopDto{
    @Transform(({value}) => value._id )
    staff:Staff
    @IsString()
    shopName:string
    @IsObject()
    shopLocation:Object
    @IsString()
    shopType:string
    @IsString()
    shopDescription:string
    @IsString()
    shopContact:string
}
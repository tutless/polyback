import { IsString } from 'class-validator';


export class SupplierDto{

    @IsString()
    fullName:string;
    @IsString()
    phoneNumber:string;
    @IsString()
    address:string
    @IsString()
    company:string
    @IsString()
    emailAddress:string
    @IsString()
    city:string
}
import { IsString } from 'class-validator';
import { Types} from 'mongoose';

export class CreateStaffDto{
    
    _id:Types.ObjectId
    @IsString()
    staff_code:string;
    @IsString()
    firstName:string;
    @IsString()
    lastName:string;
    @IsString()
    gender:string;
    @IsString()
    systemAccess:string;
    @IsString()
    contactInfo:string
    @IsString()
    staff_user:string;
    @IsString()
    staff_password:string

}
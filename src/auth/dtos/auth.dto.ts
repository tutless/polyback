import { IsString } from 'class-validator';
import {ObjectId, Types} from 'mongoose';

export class AuthDto{

    @IsString()
    _id:Types.ObjectId
    @IsString()
    username:string
    @IsString()
    password:string
}
import { IsString } from 'class-validator';

export class UnitDto{
    @IsString()
    unitName:string
    
}
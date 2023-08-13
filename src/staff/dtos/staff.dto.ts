import { Expose, Transform } from 'class-transformer';

export class StaffDto{
    @Expose()
    @Transform(({value}) => new String(value._id) )
    _id:string
    @Expose()
    firstName:string
    @Expose()
    lastName:string
    @Expose()
    gender:string
    @Expose()
    systemAccess:string
    @Expose()
    contactInfo:string
}
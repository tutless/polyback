import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Staff } from 'src/schemas/staff.schema';
import { CreateStaffDto } from './dtos/create-staff.dto';
import * as bcrypt from 'bcrypt';
import {v4 as uuidv4} from "uuid"


@Injectable()
export class StaffService {
    constructor(@InjectModel(Staff.name) private staffModel:Model<Staff>){}

    async createStaff(createStaff:Partial<CreateStaffDto>){
        return  new this.staffModel(createStaff).save()
    }
    async findOne(username:string){
        const user = await this.staffModel.findOne({staff_user:username}).exec()
        return user    
    }

    async getAllStaff(){
        return this.staffModel.find()
    }

    
}

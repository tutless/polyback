import { Module } from '@nestjs/common';
import { StaffService } from './staff.service';
import { StaffController } from './staff.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Staff, StaffSchema } from 'src/schemas/staff.schema';
import * as bcrypt from "bcrypt"
import {v4 as uuidv4} from "uuid"


@Module({
  imports:[
    MongooseModule.forFeatureAsync([{
      name: Staff.name,
      useFactory:  () => {
        const schema = StaffSchema;
        schema.pre('save', async function(){
          this.staff_password = await bcrypt.hash(this.staff_password,10)
          this.staff_code = uuidv4()
        })
        return schema
      }
    }]),
   
  ],
  providers: [StaffService],
  exports: [StaffService],
  controllers: [StaffController]
})
export class StaffModule {}

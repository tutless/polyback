import { Body, Controller, Get, Post } from '@nestjs/common';
import { StaffService } from './staff.service';
import { CreateStaffDto } from './dtos/create-staff.dto';
import { SerializeStaffDecorator } from 'src/decorators/serialize-staff.decorator';
import { StaffDto } from './dtos/staff.dto';


@Controller('staff')
export class StaffController {
    constructor(private staffService:StaffService){}

    @Post()
    createStaff(@Body() staff:Partial<CreateStaffDto>){
        return this.staffService.createStaff(staff)
    }

    @Get()
    @SerializeStaffDecorator(StaffDto)
    getAllStaff(){
        return this.staffService.getAllStaff()
    }

    
    


}

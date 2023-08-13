import { Injectable } from '@nestjs/common';

import { StaffService } from 'src/staff/staff.service';
import { AuthDto } from './dtos/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { AuthPayload } from './dtos/auth.payload';

@Injectable()
export class AuthService {
    constructor(private staffService:StaffService, private jwtService:JwtService){}

    async validateUser(username:string, pass:string) {
       const staff =  await this.staffService.findOne(username)

       if(staff && staff.staff_password === pass){
       
        return {
            _id: staff._id,
            username:staff.staff_user,
            password:staff.staff_password
        } as AuthDto
       }
       return null
      

    }

    login(req:any){
      //print the req is the answer
       const {_id,username} = req.user as AuthDto
        const payload = {
            username:username,
            sub:_id.toString()
        } as AuthPayload
        
        return {
            access_token: this.jwtService.sign(payload)
        }
    }

    

   

   

   
}

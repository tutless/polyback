import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { AuthDto } from 'src/auth/dtos/auth.dto';
import { AuthResponse } from 'src/auth/dtos/auth.response';
import { JwtAuthGuard } from 'src/guard/jwt-auth.guard';
import { LocalAuthGuard } from 'src/guard/local-auth.guard';

@Controller('login')
export class LoginController {
    constructor(private authService:AuthService){}

    @Post()
    @UseGuards(LocalAuthGuard)
    async login(@Request() req:AuthDto){
        return this.authService.login(req)
    }

    @Get('profile')
    @UseGuards(JwtAuthGuard)
    async getProfile(@Request() req:any){
        const {_id,username} = req.user as AuthResponse
        return {
            _id,
            username
        }
    }
}

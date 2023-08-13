import { ConfigService } from '@nestjs/config';
import { JwtSignOptions } from '@nestjs/jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { AuthPayload } from './dtos/auth.payload';
import { Injectable } from '@nestjs/common';
import { AuthResponse } from './dtos/auth.response';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(configService:ConfigService){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get<string>('MY_SECRET')

        })
    }

    async validate(payload:AuthPayload){

        return {
            _id: payload.sub,
            username:payload.username
        } as AuthResponse
    }
}
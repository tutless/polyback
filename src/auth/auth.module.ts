import { Module } from '@nestjs/common';
import { StaffModule } from 'src/staff/staff.module';
import { AuthService } from './auth.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';

import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';


@Module({
    imports:[
        StaffModule,
        PassportModule,
        ConfigModule,
        JwtModule.registerAsync({
            useFactory: async (config:ConfigService) => ({
                secret:config.get<string>('MY_SECRET'),
                signOptions:{
                    expiresIn: '24h'
                }
            }),
            inject:[ConfigService]
        })
    ],
    providers:[AuthService,LocalStrategy, JwtStrategy],
    exports:[AuthService]
})
export class AuthModule {}

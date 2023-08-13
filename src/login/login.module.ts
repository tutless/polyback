import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { AuthService } from 'src/auth/auth.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[AuthModule],
  controllers: [LoginController]
})
export class LoginModule {}

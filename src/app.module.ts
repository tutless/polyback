import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { StaffModule } from './staff/staff.module';
import { AuthModule } from './auth/auth.module';
import { LoginModule } from './login/login.module';
import { PurchaseModule } from './purchase/purchase.module';
import { SupplierModule } from './supplier/supplier.module';
import { EventEmitter } from 'stream';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ReduxModule } from './redux/redux.module';
import { DeliveryModule } from './delivery/delivery.module';
import { StockModule } from './stock/stock.module';
import { MaintenanceModule } from './maintenance/maintenance.module';
import { ShopModule } from './shop/shop.module';






@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.development',
    }),
    MongooseModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        uri: config.get<string>('MONGO_URL'),
      }),
      inject: [ConfigService],
    }),
    EventEmitterModule.forRoot({
      // set this to `true` to use wildcards
      wildcard: true,
      // the delimiter used to segment namespaces
      delimiter: '.',
      // set this to `true` if you want to emit the newListener event
      newListener: true,
      // set this to `true` if you want to emit the removeListener event
      removeListener: false,
      // the maximum amount of listeners that can be assigned to an event
      maxListeners: 10,
      // show event name in memory leak message when more than maximum amount of listeners is assigned
      verboseMemoryLeak: false,
      // disable throwing uncaughtException if an error event is emitted and it has no listeners
      ignoreErrors: false,
    }),
    ProductModule,
    StaffModule,
    AuthModule,
    LoginModule,
    PurchaseModule,
    SupplierModule,
    ReduxModule,
    DeliveryModule,
    StockModule,
    MaintenanceModule,
    ShopModule,

    
  
   

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { PurchaseController } from './purchase.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PurchaseOrder, PurchaseOrderSchema } from 'src/schemas/purchase-order.schema';
import { ProductModule } from 'src/product/product.module';
import { PurchaseListener } from 'src/events/purchase.listener';
import { ReduxModule } from 'src/redux/redux.module';
import { SlicesModule } from 'src/redux/slices/slices.module';


@Module({
  imports:[
    MongooseModule.forFeature([
     {
      name:PurchaseOrder.name, schema:PurchaseOrderSchema
     }
    ]),
    ProductModule,
    ReduxModule,
    SlicesModule
    
   
    
  ],
  
  providers: [PurchaseService, PurchaseListener],
  controllers: [PurchaseController],
  exports:[PurchaseService]
})
export class PurchaseModule {}

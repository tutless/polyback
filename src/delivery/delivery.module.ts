import { Module } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { DeliveryController } from './delivery.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Delivery, DeliverySchema } from 'src/schemas/delivery.schema';
import { StockModule } from 'src/stock/stock.module';
import { StockService } from 'src/stock/stock.service';



@Module({
  imports:[
    MongooseModule.forFeatureAsync([
      {
        name: Delivery.name, 
        imports:[StockModule],
        useFactory:(stockService:StockService) => {
          const schema = DeliverySchema
          schema.post('save', (doc) => {
            stockService.saveNewStock(doc, doc._id)
          })
          return schema
        },
        inject:[StockService]
        
      }
    
    ])
  ],
  providers: [DeliveryService],
  controllers: [DeliveryController]
})
export class DeliveryModule {}

import { Module } from '@nestjs/common';
import { StockService } from './stock.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Stock, StockSchema } from 'src/schemas/stock.schema';
import { PurchaseModule } from 'src/purchase/purchase.module';

@Module({
  imports:[
    PurchaseModule,
    MongooseModule.forFeature([
      {
        name: Stock.name, schema:StockSchema
      }
    ])
  ],
  providers: [StockService],
  exports:[StockService]
})
export class StockModule {}

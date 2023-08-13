import { Module } from '@nestjs/common';
import { PurchaseServiceSlice } from './purchase.service';

@Module({
  providers: [PurchaseServiceSlice],
  exports:[PurchaseServiceSlice]
})
export class SlicesModule {}

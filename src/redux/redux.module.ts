import { Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { SlicesModule } from './slices/slices.module';

@Module({
  providers: [StoreService],
  imports: [SlicesModule],
  exports:[StoreService]
})
export class ReduxModule {}

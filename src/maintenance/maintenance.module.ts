import { Module } from '@nestjs/common';
import { MaintenanceService } from './maintenance.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from 'src/schemas/category.schema';
import { Unit, UnitSchema } from 'src/schemas/unit.schema';
import { MaintenanceController } from './maintenance.controller';

@Module({
  imports:[
    MongooseModule.forFeature([{name: Category.name, schema:CategorySchema}]),
    MongooseModule.forFeature([{name: Unit.name, schema:UnitSchema}])

  ],
  providers: [MaintenanceService],
  controllers: [MaintenanceController]
})
export class MaintenanceModule {}

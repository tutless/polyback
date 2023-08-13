import { Body, Controller, Get, Post } from '@nestjs/common';
import { MaintenanceService } from './maintenance.service';
import { CategoryDto } from './dtos/category.dto';
import { UnitDto } from './dtos/unit.dto';

@Controller('maintenance')
export class MaintenanceController {
    constructor(private maintenanceService:MaintenanceService){}

    @Post("/category")
    saveCategory(@Body() catData:CategoryDto){
        
        return this.maintenanceService.saveCategory(catData)
    }

    @Post("/unit")
    saveUnit(@Body() unitData:UnitDto){
        return this.maintenanceService.saveUnit(unitData)
    }

    @Get("/categories")
    getCategories(){
        return this.maintenanceService.getCategories()
    }

    @Get("/units")
    getUnits(){
        return this.maintenanceService.getUnits()
    }
}

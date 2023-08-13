import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { defer, of } from 'rxjs';
import { Category } from 'src/schemas/category.schema';
import { Unit } from 'src/schemas/unit.schema';
import { CategoryDto } from './dtos/category.dto';
import { UnitDto } from './dtos/unit.dto';

@Injectable()
export class MaintenanceService {
    constructor(
        @InjectModel(Category.name) private categoryModel:Model<Category>,
        @InjectModel(Unit.name) private unitModel:Model<Unit>
    ){}

    saveCategory(data:CategoryDto){
        return of(new this.categoryModel(data).save())
    }

    saveUnit(data:UnitDto){
        return of(new this.unitModel(data).save())
    }

    getCategories(){
       return defer( async () => await this.categoryModel.find().lean() )
    }

    getUnits(){
       return defer(async () => await this.unitModel.find().lean())
    }
}

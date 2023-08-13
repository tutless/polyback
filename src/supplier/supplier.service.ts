import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { defer, of } from 'rxjs';
import { Supplier } from 'src/schemas/supplier.schema';
import { SupplierDto } from './dtos/supplier.dto';

@Injectable()
export class SupplierService {
    constructor(@InjectModel(Supplier.name) private supplierModel:Model<Supplier>){}


    saveSupplier(data:SupplierDto){
        return of(new this.supplierModel(data).save())
    }

    getAllSupplier(){
        return defer(async () => await this.supplierModel.find().lean() )
    }

    getSupplierByid(_id:Types.ObjectId){
        return defer(async () => await this.supplierModel.findById({_id}).lean() )
    }
}

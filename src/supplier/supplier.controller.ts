import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { SupplierDto } from './dtos/supplier.dto';
import mongoose from 'mongoose';

@Controller('supplier')
export class SupplierController {
    constructor(private supplierService:SupplierService){}

    @Post()
    saveSupplier(@Body() postData:SupplierDto){
        return this.supplierService.saveSupplier(postData)
    }

    @Get("/:id")
    getAllSupplier(@Param('id') id:string){
        const objId = new mongoose.Types.ObjectId(id)
       return this.supplierService.getSupplierByid(objId)
    }
    
}
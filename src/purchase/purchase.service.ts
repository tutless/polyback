import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PurchaseOrder } from 'src/schemas/purchase-order.schema';
import { PurchaseOrderDto } from './dtos/purchase-order.dto';
import { ProductService } from 'src/product/product.service';
import {of,  from, map, mergeMap,defer,iif, EMPTY,toArray} from "rxjs"
import {EventEmitter2} from "@nestjs/event-emitter"
import { StoreService } from 'src/redux/store.service';
import { PurchaseServiceSlice } from 'src/redux/slices/purchase.service';




@Injectable()
export class PurchaseService {
    constructor(@InjectModel(PurchaseOrder.name) 
    private purchaseOrderModel:Model<PurchaseOrder>, 
    private productService:ProductService,
    private eventEmitter:EventEmitter2,   
    ){} 

    async SavePurchase(purchaseOrderDto:PurchaseOrderDto){
        const {initPurchase} = PurchaseServiceSlice.PurchaseSlice.actions
        from(purchaseOrderDto.purchases)
        .pipe(mergeMap((purchase) =>  defer(async() =>  await this.productService.getProductByName(purchase.item))
        .pipe(mergeMap(product => iif(() => product!=null,of(product),EMPTY)))
        .pipe(map(result => {
            return {
                ...purchase,
                product:result
            }
        }))),
        toArray()).subscribe(async result => {
            purchaseOrderDto["purchases"] = result
            const newItem = await new this.purchaseOrderModel(purchaseOrderDto).save()
            this.eventEmitter.emit('purchase.newItem',newItem)
            // StoreService.store.dispatch(initPurchase(purchaseOrderDto))
            
            
        })

        return from(this.purchaseOrderModel.find())


    }

    async GetPurchaseOrder(){
        return this.purchaseOrderModel.find().exec()
    }

    async PostPurchaseOrder(id:string,data:Partial<PurchaseOrderDto>){
        return await this.purchaseOrderModel.findOneAndUpdate({_id:id}, {...data}, {
            new:true
        })
    }

    GetPurchaseOrderById(id:PurchaseOrder){
        return defer( async () => await this.purchaseOrderModel.findById(id) )
    }

}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId, Types } from 'mongoose';
import { map, mergeMap, tap,from } from 'rxjs';
import { PurchaseService } from 'src/purchase/purchase.service';
import { Delivery } from 'src/schemas/delivery.schema';
import { PurchaseOrder } from 'src/schemas/purchase-order.schema';
import { Stock } from 'src/schemas/stock.schema';
import { StockDto } from './dtos/stock-dto';

@Injectable()
export class StockService {
    constructor(@InjectModel(Stock.name) private stockModel:Model<Stock>, 
    private purchaseService:PurchaseService){}

    saveNewStock(delivery:Delivery, id:Types.ObjectId){
        
        this.purchaseService.GetPurchaseOrderById(delivery.purchase_order)
        .pipe(mergeMap(purchaseOrder => from(purchaseOrder.purchases).pipe(map(result => {
            return {
               delivery:id,
               product:result.product.id,
               quantity:result.qty,
               date_in: new Date(Date.now())
            } as StockDto
        })))).subscribe(result => new this.stockModel(result).save())
    }
}

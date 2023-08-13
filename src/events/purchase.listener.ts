import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { PurchaseOrderDto } from 'src/purchase/dtos/purchase-order.dto';

@Injectable()
export class PurchaseListener{

    public PuchaseStore = {}

    @OnEvent('purchase.newItem')
    handleNewPurchase(event:PurchaseOrderDto){
       console.log(event)
       
    }
}
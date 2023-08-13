import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { PurchaseOrderDto } from './dtos/purchase-order.dto';

@Controller('purchase')
export class PurchaseController {
    constructor(private purchaseService:PurchaseService){}

   
    @Post()
    PurchaseOrder(@Body() purchase:PurchaseOrderDto){
        console.log(purchase)
        return this.purchaseService.SavePurchase(purchase)
       
    }

    @Get()
    PurchaseOrderList(){
        return this.purchaseService.GetPurchaseOrder()
    }

    @Patch('/:id')
    PurchaseOrderPosting(@Param('id') id:string, @Body() body: Partial<PurchaseOrderDto>){
       return this.purchaseService.PostPurchaseOrder(id,body)
    }
}

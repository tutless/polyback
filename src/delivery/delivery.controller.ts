import { Body, Controller, Get, Post } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { DeliveryDto } from './dtos/delivery.dto';
import { of, from, map, mergeMap} from 'rxjs';



@Controller('delivery')
export class DeliveryController {

    constructor(private deliveryService:DeliveryService){}

    @Post()
    receivePostedDelivery(@Body() delivery:DeliveryDto[]){
        from(delivery).pipe(map(data => this.deliveryService.receiveDelivery(data)))
        .subscribe(async result =>  console.log(await result))
    }

    @Get()
    getReceivedDelivery(){
        return this.deliveryService.getDeliveredItems()
    }

    @Get('/populate-purchases')
    getPurchases(){
        return this.deliveryService.populatePurchases()
    }
    
}

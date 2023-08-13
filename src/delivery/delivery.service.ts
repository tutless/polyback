import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Delivery } from 'src/schemas/delivery.schema';
import { DeliveryDto } from './dtos/delivery.dto';
import { defer, from,map,mergeMap,of } from 'rxjs';

@Injectable()
export class DeliveryService {
    constructor(@InjectModel(Delivery.name) private deliveryModel:Model<Delivery>){}

    async receiveDelivery(deliveryData:DeliveryDto){
        return new this.deliveryModel(deliveryData).save()
    }

    getDeliveredItems(){
        return  defer( async () => await this.deliveryModel.find().exec())
    }

    populatePurchases(){
        return defer(async () => {
            return await this.deliveryModel
            .find({paid:false})
            .populate('purchase_order')
        })

        

    }


}

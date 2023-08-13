import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';

import { ProductService } from 'src/product/product.service';
import { PurchaseItem } from 'src/purchase/dtos/purchaseItem';
import {chain} from "lodash"
import {Observable} from "rxjs"


@Injectable()
export class PurchaseItemInterceptor implements NestInterceptor{
    constructor(private productService:ProductService){}

    async intercept(context:ExecutionContext,next:CallHandler<any>):Promise<Observable<any>> {
        const req = context.switchToHttp().getRequest()
       
        const items = chain(req.body['purchases'] as PurchaseItem[]).map(item => item.item).value()

       console.log(items)
        
        return next.handle()

    }
}
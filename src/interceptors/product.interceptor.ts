import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { startCase } from 'lodash';

@Injectable()
export class ProductInterceptor implements NestInterceptor{
    async intercept(context: ExecutionContext, next: CallHandler<any>): Promise<Observable<any>> {
       const req = context.switchToHttp().getRequest()
     
       const serializeProduct = {...req.body, productName: startCase(req.body['productName'])}
       req.newProduct = serializeProduct
      
       return next.handle()
    }
    
}
import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Observable,map } from 'rxjs';

export class SerializeStaffInterceptor implements NestInterceptor{
    constructor(private dto:any){}
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        return next.handle().pipe(map((data:any) => {
            return plainToInstance(this.dto, data,{
                excludeExtraneousValues:true
            })
        }))
    }

}
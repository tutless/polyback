import { UseInterceptors } from '@nestjs/common'
import { SerializeStaffInterceptor } from 'src/interceptors/serialize-staff.interceptor'

export const SerializeStaffDecorator = <T>(dto:T): MethodDecorator & ClassDecorator => {
    return UseInterceptors(new SerializeStaffInterceptor(dto))
}
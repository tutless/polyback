import { ExecutionContext, createParamDecorator } from '@nestjs/common'


export const SerializeProduct = createParamDecorator(
    (data:never,context:ExecutionContext) => {
    const request = context.switchToHttp().getRequest()
    return request.newProduct
})
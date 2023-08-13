import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common'
import { CreateProductDto } from './dtos/create-product.dto';
import { ProductService } from './product.service';
import { ProductInterceptor } from 'src/interceptors/product.interceptor';
import { SerializeProduct } from 'src/decorators/product.decorator';


@Controller('product')
@UseInterceptors(ProductInterceptor)
export class ProductController {

    constructor(private productService:ProductService){}

    @Post()
    createProduct(@SerializeProduct() product:CreateProductDto){
        return  this.productService.createProduct(product)
       
    }

    @Get()
    getproduct(){
        return this.productService.getAllProducts()
    }

    
}

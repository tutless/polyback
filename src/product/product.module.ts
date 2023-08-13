import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from 'src/schemas/product.schema';
import { ProductInterceptor } from 'src/interceptors/product.interceptor';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name: Product.name, schema:ProductSchema
      }
    ])
  ],
  controllers: [ProductController],
  providers: [ProductService],
  exports:[ProductService]
})
export class ProductModule {}

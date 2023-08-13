import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PurchaseItem } from './purchase-item.schema';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  id: string;
  @Prop()
  productName: string;
  @Prop()
  description: string;
  @Prop()
  productCode: string;
  @Prop()
  productSKU: string;
  @Prop()
  priceCost: number;
  @Prop()
  sellingPrice: number;
  @Prop()
  createAt: Date;
  @Prop()
  productStatus: string;
  
}
export const ProductSchema = SchemaFactory.createForClass(Product);

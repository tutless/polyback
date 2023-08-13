import { Injectable } from '@nestjs/common';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PurchaseOrderDto } from 'src/purchase/dtos/purchase-order.dto';


@Injectable()
export class PurchaseServiceSlice {

    static PurchaseSlice = createSlice({
        name:"purchaseSlice",
        initialState:[] ,
        reducers:{
            initPurchase:(state, action:PayloadAction<PurchaseOrderDto>) => {
                return [...state, {purchases:action.payload}]
            }
        }
    })
}

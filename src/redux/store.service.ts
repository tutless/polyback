import { Injectable } from '@nestjs/common';
import { configureStore } from '@reduxjs/toolkit';
import { PurchaseServiceSlice } from './slices/purchase.service';


@Injectable()
export class StoreService {
   

    static store = configureStore({
        reducer:{
            purchaseReducer: PurchaseServiceSlice.PurchaseSlice.reducer
        },
       
    })

   
}

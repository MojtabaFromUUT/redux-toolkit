import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './features/cartSlice'
import './features/cartSlice'
export const store = configureStore({
    reducer :{
        cart : cartReducer
    }
})
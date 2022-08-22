import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../cartItems";
import axios from "axios";

const URL = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
    cartItems: cartItems,
    amount: 0,
    total: 0,
    isLoading: false,
};
export const getCartItems = createAsyncThunk("cart/getCartItems", async() => {
    try {
        return (await axios(URL)).data
    } catch (err) {
        
    }
});
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => {
                return item.id !== itemId;
            });
        },
        increase: (state, action) => {
            const cartItem = state.cartItems.find(
                (item) => item.id === action.payload
            );
            cartItem.amount = cartItem.amount + 1;
        },
        decrease: (state, action) => {
            const cartItem = state.cartItems.find(
                (item) => item.id === action.payload
            );
            cartItem.amount = cartItem.amount - 1;
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total.toFixed(2);
        },
    },
    extraReducers: {
        [getCartItems.pending]: (state) => {
            state.isLoading = true;
        },
        [getCartItems.fulfilled]: (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.cartItems = action.payload
        },
        [getCartItems.rejected]:(state)=>{
            state.isLoading = false
        }
    },
});
export const { clearCart, removeItem, increase, decrease, calculateTotals } =
    cartSlice.actions;
export default cartSlice.reducer;

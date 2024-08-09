import { createSlice } from "@reduxjs/toolkit";


type CartItem = {
    id: string,
    title: string,
    quantity: number,
    price: number
}

type CartState = {
    items: CartItem[]
}

const initialState: CartState = {
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            
        },
        removeFromCart() {}
    }
})
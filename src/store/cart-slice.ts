import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export type CartItem = {
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
        addToCart(state, action:PayloadAction<{id: string, title: string, price: number}>) { //same as useReducer
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 1) {
                state.items[itemIndex].quantity++;
            } else {
                state.items.push({
                    ...action.payload, quantity: 1
                })
            }
        },
        removeFromCart(state, action:PayloadAction<string>) {
            const itemIndex = state.items.findIndex(item => item.id === action.payload);
            if (itemIndex === 1) {
                state.items.splice(itemIndex, 1);
            } else {
                state.items[itemIndex].quantity--;
            }
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions
import { createSlice } from "@reduxjs/toolkit";

let cartData = JSON.parse(localStorage.getItem("cartData")) || [];

const CartSlice = createSlice({

    name: "cart",

    initialState: cartData,

    reducers: {

        ADDCART: (state, action) => {

            let product = action.payload;

            let existingItem = state.find(
                item => item.id === product.id
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {

                state.push({
                    ...product,
                    quantity: 1
                });
            }

            localStorage.setItem(
                "cartData",
                JSON.stringify(state)
            );
        },

        REMOVECART: (state, action) => {

            let updatedCart = state.filter(
                item => item.id !== action.payload
            );

            localStorage.setItem(
                "cartData",
                JSON.stringify(updatedCart)
            );

            return updatedCart;
        },

        INC: (state, action) => {

            let item = state.find(
                item => item.id === action.payload
            );

            if (item) {
                item.quantity += 1;
            }

            localStorage.setItem(
                "cartData",
                JSON.stringify(state)
            );
        },

        DEC: (state, action) => {

            let item = state.find(
                item => item.id === action.payload
            );

            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }

            localStorage.setItem(
                "cartData",
                JSON.stringify(state)
            );
        }

    }

});

export const {
    ADDCART,
    REMOVECART,
    INC,
    DEC
} = CartSlice.actions;

export default CartSlice.reducer;
import { configureStore } from "@reduxjs/toolkit";
import cartOper from "./Cart/CartSlice";

const store = configureStore({
    reducer: {
        cart: cartOper
    }
});

export default store;
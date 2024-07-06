import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./store/authSlice";
import favoriteProductsSlice from "./store/favoriteProductsSlice";
import cartProductsSlice from "./store/cartProductsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    favoriteProducts: favoriteProductsSlice,
    cartProducts: cartProductsSlice
  },
});

export default store;

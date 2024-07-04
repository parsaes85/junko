import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./store/authSlice";
import favoriteProductsSlice from "./store/favoriteProductsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    favoriteProducts: favoriteProductsSlice
  },
});

export default store;

import { createSlice } from "@reduxjs/toolkit";

export const cartProductsSlice = createSlice({
  name: "cartProducts",
  initialState: {
    products: [],
  },
  reducers: {
    setCartProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setCartProducts } = cartProductsSlice.actions;
export default cartProductsSlice.reducer;

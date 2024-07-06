import { createSlice } from "@reduxjs/toolkit";

export const favoriteProductsSlice = createSlice({
  name: "favoriteProducts",
  initialState: {
    products: [],
  },
  reducers: {
    setFavoriteProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setFavoriteProducts } = favoriteProductsSlice.actions;
export default favoriteProductsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    userInfos: {},
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.userInfos = action.payload.userInfos;
      console.log("action =>", action.payload);
    },
    logout: (state) => {},
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

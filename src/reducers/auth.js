import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: sessionStorage.getItem("token") || "",
    isLoggedIn: sessionStorage.getItem("token") ? true : false,
  },
  reducers: {
    signIn: (state, action) => {
      sessionStorage.setItem("token", action.payload);

      state.token = sessionStorage.getItem("token");
      state.isLoggedIn = true;
    },
    signOut: (state) => {
      sessionStorage.removeItem("token");

      state.token = "";
      state.isLoggedIn = false;
    },
  },
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;

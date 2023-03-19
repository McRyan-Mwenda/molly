import { createSlice } from "@reduxjs/toolkit";

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    token: sessionStorage.getItem("token") || "",
    username: sessionStorage.getItem("username") || "",
    isLoggedIn: sessionStorage.getItem("token") ? true : false,
  },
  reducers: {
    signIn: (state, action) => {
      sessionStorage.setItem("token", action.payload.token);
      sessionStorage.setItem("username", action.payload.username);

      state.username = sessionStorage.getItem("username");
      state.token = sessionStorage.getItem("token");
      state.isLoggedIn = true;
    },
    signOut: (state) => {
      sessionStorage.removeItem("token");

      state.username = "";
      state.token = "";
      state.isLoggedIn = false;
    },
  },
});

export const { signIn, signOut } = authReducer.actions;
export default authReducer.reducer;

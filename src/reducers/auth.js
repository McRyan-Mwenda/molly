import { createSlice } from "@reduxjs/toolkit";

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    username: "",
    token: sessionStorage.getItem("token") || "",
    isLoggedIn: sessionStorage.getItem("token") ? true : false,
  },
  reducers: {
    signIn: (state, action) => {
      sessionStorage.setItem("token", action.payload.token);

      state.username = action.payload.username;
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

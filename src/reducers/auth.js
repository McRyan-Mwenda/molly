import { createSlice } from "@reduxjs/toolkit";

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token") || "",
    isLoggedIn: localStorage.getItem("token") ? true : false,
    twoFA: localStorage.getItem("2FA") ? true : false,
  },
  reducers: {
    signIn: (state, action) => {
      localStorage.setItem("token", action.payload.token);

      state.token = localStorage.getItem("token");
      state.isLoggedIn = true;
    },
    signOut: (state) => {
      localStorage.removeItem("token");

      state.token = "";
      state.isLoggedIn = false;
    },
    activateTwoFA: (state) => {
      localStorage.setItem("2FA", true);

      state.twoFA = localStorage.getItem("2FA");
    },
    deactivateTwoFA: (state) => {
      localStorage.removeItem("2FA");

      state.twoFA = false;
    },
  },
});

export const { signIn, signOut, activateTwoFA, deactivateTwoFA } =
  authReducer.actions;
export default authReducer.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    token: sessionStorage.getItem("token") || "",
    isLoggedIn: sessionStorage.getItem("token") ? true : false,
    twoFA: sessionStorage.getItem("2FA") ? true : false,
  },
  reducers: {
    signIn: (state, action) => {
      sessionStorage.setItem("token", action.payload.token);

      state.token = sessionStorage.getItem("token");
      state.isLoggedIn = true;
    },
    signOut: (state) => {
      sessionStorage.removeItem("token");

      state.token = "";
      state.isLoggedIn = false;
    },
    activateTwoFA: (state) => {
      sessionStorage.setItem("2FA", true);

      state.twoFA = sessionStorage.getItem("2FA");
    },
    deactivateTwoFA: (state) => {
      sessionStorage.removeItem("2FA");

      state.twoFA = false;
    },
  },
});

export const { signIn, signOut, activateTwoFA, deactivateTwoFA } =
  authReducer.actions;
export default authReducer.reducer;

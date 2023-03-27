import { createSlice } from "@reduxjs/toolkit";

export const packageReducer = createSlice({
  name: "package",
  initialState: {
    package: localStorage.getItem("package") || "Free",
  },
  reducers: {
    upgradeToPro: (state) => {
      localStorage.setItem("package", "Pro");

      state.package = localStorage.getItem("package");
    },
    downgradeToFree: (state) => {
      localStorage.removeItem("package");

      state.package = "Free";
    },
  },
});

export const { upgradeToPro, downgradeToFree } = packageReducer.actions;
export default packageReducer.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const packageReducer = createSlice({
  name: "package",
  initialState: {
    package: localStorage.getItem("package") || "Free",
    is_employee: localStorage.getItem("is_employee") || true,
  },
  reducers: {
    upgradeToStandard: (state) => {
      localStorage.setItem("package", "Standard");

      state.package = localStorage.getItem("package");
    },
    upgradeToPro: (state) => {
      localStorage.setItem("package", "Pro");

      state.package = localStorage.getItem("package");
    },
    downgradeToFree: (state) => {
      localStorage.removeItem("package");

      state.package = "Free";
    },
    makeEmployee: (state) => {
      localStorage.setItem("is_employee", true);

      state.is_employee = localStorage.getItem("is_employee");
    },
    makeNotEmployee: (state) => {
      localStorage.removeItem("is_employee");

      state.is_employee = false;
    },
  },
});

export const {
  upgradeToPro,
  upgradeToStandard,
  downgradeToFree,
  makeEmployee,
  makeNotEmployee,
} = packageReducer.actions;
export default packageReducer.reducer;

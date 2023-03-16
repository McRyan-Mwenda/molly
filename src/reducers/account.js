import { createSlice } from "@reduxjs/toolkit";

export const accountReducer = createSlice({
  name: "account",
  initialState: {
    userAccounts: [],
  },
  reducers: {
    updateAccounts: (state, action) => {
      state.userAccounts = action.payload.userAccounts;
    },
  },
});

export const { updateAccounts } = accountReducer.actions;
export default accountReducer.reducer;

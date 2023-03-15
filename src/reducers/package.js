import { createSlice } from "@reduxjs/toolkit";

export const packageReducer = createSlice({
  name: "package",
  initialState: {
    accountLimit: 0,
    generatePdfReport: false,
    useAiPrediction: false,
  },
  reducers: {
    setPackage: (state, action) => {
      state.accountLimit = action.payload.limit;
      state.generatePdfReport = action.payload.pdf;
      state.useAiPrediction = action.payload.ai;
    },
  },
});

export const { setPackage } = packageReducer.actions;
export default packageReducer.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const packageReducer = createSlice({
  name: "package",
  initialState: {
    accountLimit: 0,
    generatePdfReport: false,
    useAiPrediction: false,
  },
  reducers: {
    setToFree: (state, action) => {
      state.accountLimit = action.payload.limit;
      state.generatePdfReport = action.payload.pdf;
      state.useAiPrediction = action.payload.ai;
    },
    setToStandard: (state, action) => {
      state.accountLimit = action.payload.limit;
      state.generatePdfReport = action.payload.pdf;
      state.useAiPrediction = action.payload.ai;
    },
    setToPro: (state, action) => {
      state.accountLimit = action.payload.limit;
      state.generatePdfReport = action.payload.pdf;
      state.useAiPrediction = action.payload.ai;
    },
  },
});

export const { downGradeToFree, upGradeToStandard, upGradeToPro } =
  packageReducer.actions;
export default packageReducer.reducer;

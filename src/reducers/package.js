import { createSlice } from "@reduxjs/toolkit";

export const packageReducer = createSlice({
  name: "package",
  initialState: {
    accountLimit: 2,
    generatePdfReport: false,
    useAiPrediction: false,
  },
  reducers: {
    downGradeToFree: (state, action) => {
      state.accountLimit = action.payload;
      state.generatePdfReport = false;
      state.useAiPrediction = false;
    },
    upGradeToStandard: (state, action) => {
      state.accountLimit = action.payload;
      state.generatePdfReport = true;
      state.useAiPrediction = false;
    },
    upGradeToPro: (state, action) => {
      state.accountLimit = action.payload;
      state.generatePdfReport = true;
      state.useAiPrediction = true;
    },
  },
});

export const { downGradeToFree, upGradeToStandard, upGradeToPro } =
  packageReducer.actions;
export default packageReducer.reducer;

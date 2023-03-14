import { createSlice } from "@reduxjs/toolkit";

export const loadingReducer = createSlice({
  name: "loading",
  initialState: {
    isLoading: false,
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload.status;
    },
  },
});

export const { setIsLoading } = loadingReducer.actions;
export default loadingReducer.reducer;

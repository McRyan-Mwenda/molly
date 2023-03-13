import { createSlice } from "@reduxjs/toolkit";

export const notificationReducer = createSlice({
  name: "notification",
  initialState: {
    message: "",
    type: "",
  },
  reducers: {
    setNotification: (state, action) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
  },
});

export const { setNotification } = notificationReducer.actions;
export default notificationReducer.reducer;

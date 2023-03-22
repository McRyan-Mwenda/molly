import { createSlice } from "@reduxjs/toolkit";

export const notificationReducer = createSlice({
  name: "notification",
  initialState: {
    type: null,
    message: null,
  },
  reducers: {
    createNewNotification: (state, action) => {
      const { type, message } = action.payload;

      state.type = type;
      state.message = message;
    },
    removeOldNotification: (state) => {
      state.type = null;
      state.message = null;
    },
  },
});

export const { createNewNotification, removeOldNotification } =
  notificationReducer.actions;
export default notificationReducer.reducer;

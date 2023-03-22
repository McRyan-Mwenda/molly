import authReducer from "./reducers/auth";
import loadingReducer from "./reducers/loading";
import { configureStore } from "@reduxjs/toolkit";
import notificationReducer from "./reducers/notifications";

export default configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
    notification: notificationReducer,
  },
});

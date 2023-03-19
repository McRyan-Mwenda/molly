import authReducer from "./reducers/auth";
import loadingReducer from "./reducers/loading";
import packageReducer from "./reducers/package";
import { configureStore } from "@reduxjs/toolkit";
import notificationReducer from "./reducers/notifications";

export default configureStore({
  reducer: {
    auth: authReducer,
    package: packageReducer,
    notification: notificationReducer,
    loading: loadingReducer,
  },
});

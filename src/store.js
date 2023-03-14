import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import packageReducer from "./reducers/package";
import notificationReducer from "./reducers/notifications";
import loadingReducer from "./reducers/loading";

export default configureStore({
  reducer: {
    auth: authReducer,
    package: packageReducer,
    notification: notificationReducer,
    loading: loadingReducer,
  },
});

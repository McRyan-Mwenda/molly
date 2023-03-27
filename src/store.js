import authReducer from "./reducers/auth";
import loadingReducer from "./reducers/loading";
import { configureStore } from "@reduxjs/toolkit";
import notificationReducer from "./reducers/notifications";
import packageReducer from "./reducers/package";

export default configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
    notification: notificationReducer,
    package: packageReducer,
  },
});

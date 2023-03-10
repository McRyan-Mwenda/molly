import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import packageReducer from "./reducers/package";

export default configureStore({
  reducer: {
    auth: authReducer,
    package: packageReducer,
  },
});

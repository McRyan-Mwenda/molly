import authReducer from "./reducers/auth";
import loadingReducer from "./reducers/loading";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
  },
});

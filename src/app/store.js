import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/slice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});

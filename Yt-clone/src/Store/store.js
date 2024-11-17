import { configureStore } from "@reduxjs/toolkit";
import appReducers from "./appSlice";
export const store = configureStore({
  reducer: {app:appReducers},
});

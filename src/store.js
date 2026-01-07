import { configureStore } from "@reduxjs/toolkit";
import loremReducer from "./redux/loremSlice";

const store = configureStore({
  reducer: loremReducer
});

export default store;

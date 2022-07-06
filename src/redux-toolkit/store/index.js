import { rootReducer } from "./reducers";
import { configureStore } from "@reduxjs/toolkit";


export const storeRTK = configureStore ({
  reducer: rootReducer,
})

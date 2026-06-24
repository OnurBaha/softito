import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice.js";
import customerReducer from "./customerSlice.js";
import stockReducer from "./stockSlice.js";
import productReducer from "./productSlice.js";
import reportReducer from "./reportSlice.js";
import messageReducer from "./messageSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    customers: customerReducer,
    stock: stockReducer,
    products: productReducer,
    reports: reportReducer,
    messaging: messageReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import bankingSlice from "./features/banking/bankingSlice";

export const store = configureStore({
  reducer: {
    banking: bankingSlice,
  },
});

export default store;

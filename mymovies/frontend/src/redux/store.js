import { configureStore } from "@reduxjs/toolkit";
import { setupListener } from "@reduxjs/toolkit/query/react";
const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apliSlice.middleware),
  devTools: true,
});

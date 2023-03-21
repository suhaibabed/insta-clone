import { configureStore } from "@reduxjs/toolkit";
import authSlice from './slices/authSlice'
// Use `configureStore` function to create the store:
export const store = configureStore({
  reducer: {
    authSlice:authSlice
  },
});

// Define the `RootState` as the return type:
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
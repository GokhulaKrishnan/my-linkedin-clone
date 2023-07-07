import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";

// Here we are creating the store and assigning userReducer to the store becasue it only manages the store.

// In store we are not intializing the initial values

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

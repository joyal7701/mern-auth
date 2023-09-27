import { configureStore } from "@reduxjs/toolkit"; // function {}
import useReducer from "./user/userSlice"; // export default
export const store = configureStore({
  reducer: { user: useReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

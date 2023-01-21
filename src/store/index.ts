import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth/index";
import eventReducer from "./reducers/event/index";

export const store = configureStore({
  reducer: { isAuth: authReducer, event: eventReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

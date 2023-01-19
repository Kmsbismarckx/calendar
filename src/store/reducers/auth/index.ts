import { createSlice } from "@reduxjs/toolkit";
import { AuthActionEnum, AuthState } from "./types";
import { RootState } from "../../index";

const initialState: AuthState = {
  isAuth: false,
};

const authSlice = createSlice({
  name: AuthActionEnum.AUTH,
  initialState,
  reducers: {
    set(state, action) {
      state.isAuth = action.payload;
    },
  },
});

export default authSlice.reducer;

export const { set } = authSlice.actions;

export const selectAuth = (state: RootState) => state.isAuth;

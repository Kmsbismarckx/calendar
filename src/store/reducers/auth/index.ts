import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  AuthState,
  SetUserPayload,
  SetAuthPayload,
  SetIsLoadingPayload,
  SetErrorPayload,
} from "./types";
import { RootState } from "../../index";
import { IUser } from "../../../models/IUser";

const initialState: AuthState = {
  isAuth: !!localStorage.getItem("auth"),
  user: {
    username: localStorage.getItem("auth")
      ? localStorage.getItem("username")
      : "",
  } as IUser,
  isLoading: false,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, { payload }: PayloadAction<SetAuthPayload>) {
      state.isAuth = payload;
      state.isLoading = false;
    },
    setUser(state, { payload }: PayloadAction<SetUserPayload>) {
      state.user = payload;
    },
    setIsLoading(state, { payload }: PayloadAction<SetIsLoadingPayload>) {
      state.isLoading = payload;
    },
    setError(state, { payload }: PayloadAction<SetErrorPayload>) {
      state.error = payload;
    },
  },
});

export default authSlice.reducer;

export const { setAuth, setUser, setIsLoading, setError } = authSlice.actions;

export const selectAuth = (state: RootState) => state.isAuth;

import { IUser } from "../../../models/IUser";

export interface AuthState {
  isAuth: boolean;
  user: IUser;
  isLoading: boolean;
  error: string;
}

export type SetAuthPayload = boolean;
export type SetUserPayload = IUser;
export type SetIsLoadingPayload = boolean;
export type SetErrorPayload = string;

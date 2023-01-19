export interface AuthState {
  isAuth: boolean;
}

export enum AuthActionEnum {
  AUTH = "AUTH",
}

export interface setAuthAction {
  type: AuthActionEnum.AUTH;
  payload: boolean;
}

export type AuthAction = setAuthAction;

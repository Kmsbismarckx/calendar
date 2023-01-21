import axios from "axios";
import { setAuth, setError, setIsLoading, setUser } from ".";
import { AppDispatch } from "../../index";
import { IUser } from "../../../models/IUser";
import UserService from "../../../api/UserService";

export const AuthActionCreators = {
  login:
    (username: string, password: string): any =>
    async (dispatch: AppDispatch) => {
      try {
        dispatch(setIsLoading(true));
        setTimeout(async () => {
          const response = await UserService.getUsers();
          const mockUser = response.data.find(
            (user) => user.username === username && user.password === password
          );
          if (mockUser) {
            localStorage.setItem("auth", "true");
            localStorage.setItem("username", mockUser.username);
            dispatch(setUser(mockUser));
            dispatch(setAuth(true));
          } else {
            dispatch(setError("Некорректные данные"));
          }
          dispatch(setIsLoading(false));
        }, 1000);
      } catch (e) {
        dispatch(setError("Произошла ошибка"));
      }
    },
  logout: (): any => (dispatch: AppDispatch) => {
    localStorage.removeItem("auth");
    localStorage.removeItem("username");
    dispatch(setUser({} as IUser));
    dispatch(setAuth(false));
  },
};

import React, { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes, RouteNames } from "../router";
import { selectAuth } from "../store/reducers/auth";
import { useTypedSelector } from "../hooks/useTypedSelector";

const AppRouter: FC = () => {
  const { isAuth } = useTypedSelector(selectAuth);

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.element />}
        ></Route>
      ))}
      <Route path="*" element={<Navigate replace to={RouteNames.EVENT} />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.element />}
        ></Route>
      ))}
      <Route path="*" element={<Navigate replace to={RouteNames.LOGIN} />} />
    </Routes>
  );
};

export default AppRouter;

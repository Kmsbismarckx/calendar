import { Layout, Menu, Row } from "antd";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../router";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { selectAuth } from "../store/reducers/auth";
import { useActions } from "../hooks/useActions";

const Navbar: FC = () => {
  const { logout } = useActions();
  const navigate = useNavigate();
  const { isAuth, user } = useTypedSelector(selectAuth);

  return (
    <Layout.Header className="header">
      <Row justify="end">
        {isAuth ? (
          <>
            <div style={{ color: "white" }}>{user.username}</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item key={1} onClick={() => logout()}>
                Выйти
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item key={1} onClick={() => navigate(RouteNames.LOGIN)}>
              Логин
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  );
};

export default Navbar;

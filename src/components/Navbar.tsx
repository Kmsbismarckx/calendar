import { Button, Layout, Menu, Row } from "antd";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../router";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { selectAuth } from "../store/reducers/auth";
import { useActions } from "../hooks/useActions";
import { useAppContext } from "../App";

const Navbar: FC = () => {
  const { logout } = useActions();
  const navigate = useNavigate();
  const { isAuth, user } = useTypedSelector(selectAuth);
  const { setModal } = useAppContext();

  const onLoginNavigate = () => navigate(RouteNames.LOGIN);

  const onLogout = () => {
    logout();
  };

  const onOpenModal = () => setModal(true);

  return (
    <Layout.Header className="header">
      <Row justify={isAuth ? "space-between" : "end"}>
        {isAuth ? (
          <>
            <Row align="middle">
              <Button onClick={onOpenModal}>Добавить событие</Button>
            </Row>
            <Row justify="end">
              <div className="username">{user.username}</div>
              <Menu theme="dark" mode="horizontal" selectable={false}>
                <Menu.Item key={1} onClick={onLogout}>
                  Выйти
                </Menu.Item>
              </Menu>
            </Row>
          </>
        ) : (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item key={1} onClick={onLoginNavigate}>
              Логин
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  );
};

export default Navbar;

import { Layout, Menu, Row } from "antd";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../router";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { selectAuth } from "../store/reducers/auth";

const Navbar: FC = () => {
  const navigate = useNavigate();
  const { isAuth } = useTypedSelector(selectAuth);

  return (
    <Layout.Header className="header">
      <Row justify="end">
        {isAuth ? (
          <>
            <div style={{ color: "white" }}>Bismarckx</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item key={1} onClick={() => console.log("Выйти")}>
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

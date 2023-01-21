import { Button, Form, Input } from "antd";
import React, { FC, useState } from "react";
import { rules } from "../utils/rules";
import { useDispatch } from "react-redux";
import { AuthActionCreators } from "../store/reducers/auth/action-creators";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { selectAuth } from "../store/reducers/auth";
import { useActions } from "../hooks/useActions";

const LoginForm: FC = () => {
  const { login } = useActions();
  const { error, isLoading } = useTypedSelector(selectAuth);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const submit = () => {
    login(username, password);
  };
  return (
    <Form onFinish={submit}>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <Form.Item
        label="Имя пользователя"
        name="Username"
        rules={[rules.required("Пожалуйста введите ваше имя")]}
      >
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="Password"
        rules={[rules.required("Пожалуйста введите пароль")]}
      >
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;

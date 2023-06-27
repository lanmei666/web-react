import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async () => {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (result.success) {
      message.success(result.message);
      // 登录成功，跳转到主页
    } else {
      message.error(result.message);
      // 登录失败，显示错误信息
    }
  };
  return (
    <Form>
      <Form.Item label="用户名">
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Item>
      <Form.Item label="密码">
        <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Item>
      <Form.Item>
        <Button onClick={handleSubmit}>登录</Button>
      </Form.Item>
    </Form>
  );
};
export default LoginPage;
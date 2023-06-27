import React, { useState } from "react";
const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>注册</h2>
      <label>
        用户名：
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <br />
      <label>
        密码：
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <label>
        确认密码：
        <input
          type="password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">注册</button>
    </form>
  );
};
export default RegisterForm;
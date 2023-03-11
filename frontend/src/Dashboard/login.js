import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
const handleLogin = async (credentials) => {
  return axios
    .post("http://localhost:5000/login", credentials)
    .then((data) => {
      return data.data;
    })
    .catch((err) => console.log(err));
};

const Login = ({ setToken }) => {
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await handleLogin({
      username,
      password,
    });

    if (token) setToken(token);
  };

  return (
    <div className="p-6">
      <h1 className="uppercase my-6">Login Admin</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
export default Login;

import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Footer, Header, Input } from "./loginComponents/LoginCompo";
import { LoginFields } from "./constants/FormFields";

// set login field

const fields = LoginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

// login and setTokens function
const handleLogin = async (credentials) => {
  return axios
    .post("http://localhost:5000/login", credentials)
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      return console.log(err.response);
    });
};

const Login = ({ setToken }) => {
  // const [password, setPassword] = useState();
  // const [username, setUsername] = useState();
  const [loginState, setLoginState] = useState(fieldsState);

  // set username and password save as object literals
  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await handleLogin({
      email: loginState.emailAddress,
      password: loginState.password,
    });

    if (token) setToken(token);
  };

  return (
    <div className="min-h-full h-screen flex  justify-center py-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <Header heading="Login To Admin Area" />

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="-space-y-px">
            {fields.map((field) => (
              <Input
                key={field.id}
                handleChange={handleChange}
                value={loginState[field.id]}
                labelText={field.labelText}
                labelFor={field.labelFor}
                id={field.id}
                name={field.name}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
              />
            ))}
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
            >
              Submit
            </button>
          </div>
        </form>
        <Footer
          paragraph="Do you want to return to the main page? "
          linkName="samuel's-profile"
          linkUrl="/"
        />
      </div>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
export default Login;

import React, { useState } from "react";
import PropTypes from "prop-types";
//import isEmpty from "is-empty";

import axios from "axios";
import { Footer, Header, Input } from "./loginComponents/LoginCompo";
import { LoginFields } from "./constants/FormFields";

// set login field
const fields = LoginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

// set handle login Error

const Login = ({ setToken }) => {
  // const [password, setPassword] = useState();
  // const [username, setUsername] = useState();
  const [loginState, setLoginState] = useState(fieldsState);
  const [displayErr, setDisplayErr] = useState(false);
  const [loading, setLoading] = useState(false);

  // set username and password save as object literals
  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  // login and setTokens function
  const handleLogin = async (credentials) => {
    return axios
      .post("http://localhost:5000/login", credentials)
      .then((data) => {
        setLoading(false);
        return data.data;
      })
      .catch((err) => {
        setLoading(false);
        setDisplayErr(true);
        return;
      });
  };
  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = await handleLogin({
      email: loginState.emailAddress,
      password: loginState.password,
    });

    if (token) setToken(token);
  };

  // set error display timeout
  if (displayErr) {
    setTimeout(() => {
      setDisplayErr(false);
    }, 3000);
  }
  return (
    <div className="min-h-full h-screen flex  justify-center py-40 px-4 sm:px-6 lg:px-8">
      {loading ? (
        <div className="absolute top-0 z-10 w-full h-full bg-white opacity-50 cursor-not-allowed"></div>
      ) : (
        ""
      )}
      <div className="max-w-md w-full space-y-8">
        <Header heading="Login To Admin Area" />

        <form onSubmit={handleSubmit} className="mt-8 space-y-6 h-full">
          {displayErr ? (
            <div className="text-red-600 flex justify-end">
              Incorrect Email or Password!
            </div>
          ) : (
            <div></div>
          )}
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
              disabled={false}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
            >
              Submit
            </button>
          </div>
          <Footer
            paragraph="Do you want to return to the main page? "
            linkName="samuel's-profile"
            linkUrl="/"
          />
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
export default Login;

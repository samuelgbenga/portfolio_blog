import express from "express";
import { handleLogin, handleRegister } from "../handler/handleLogin.js";

const loginRoute = express();

loginRoute.post("/register", handleRegister);
loginRoute.post("/login", handleLogin);

export default loginRoute;

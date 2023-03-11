import express from "express";
import { handleLogin } from "../handler/handleLogin.js";

const loginRoute = express();

loginRoute.post("/", handleLogin);

export default loginRoute;

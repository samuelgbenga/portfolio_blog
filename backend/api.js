import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import projectsRoute from "./routes/projecsRoute.js";
import loginRoute from "./routes/loginRoute.js";
import passport from "passport";
import handlePassport from "./config/passport.js";

// initials
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
const port = process.env.PORT || 5000;

// connecting to mongodb
mongoose.set("strictQuery", true);
main().catch((err) => console.log(err));

async function main() {
  await mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("connected to mongoDB "));
}

// initialize passport middleware
app.use(passport.initialize());

// passport config
handlePassport(passport);
// connect to the different routes
app.use("/", projectsRoute);
app.use("/", loginRoute);

// listening server
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

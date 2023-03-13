import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from "../model/User.js";
import { validateRegInput, validateLoginInput } from "../validation/login.js";

dotenv.config();

// Handle Resigstration
export const handleRegister = async (req, res) => {
  const { name, email, password } = req.body;
  const { isValid, errors } = validateRegInput(req.body);
  if (!isValid) return res.status(400).json(errors);
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (error) {
    return console.log(error);
  }

  // check if user already exist
  if (existingUser)
    return res.status(400).json({ message: "Email already Exist" });

  // bcrypt the password before creating in new one
  let hashedPassword = bcrypt.hashSync(password, 8);

  // creat a new user
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  // save new user details
  try {
    await newUser
      .save()
      .then((user) => {
        res.status(200).json(user);
        return console.log("New user successfully created");
      })
      .catch((err) => console.log(error));
  } catch (error) {
    return console.log(error);
  }
};

// Handle user Login

export const handleLogin = async (req, res) => {
  const { email, password } = req.body;

  const { isValid, errors } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  let existingUser;

  try {
    existingUser = await User.findOne({ email });
  } catch (error) {
    console.log(error);
  }

  if (!existingUser)
    return res.status(404).json({ message: "Email not found" });

  // check password with bcrypt

  let passwordMatch = await bcrypt.compare(password, existingUser.password);
  // check if password is correct and create jwt payload
  if (passwordMatch) {
    const payload = {
      id: existingUser._id,
      name: existingUser.name,
    };
    // then sign token
    // will try to get the token from the front end token bearer
    jwt.sign(
      payload,
      process.env.KEY,
      { expiresIn: 31556929 },
      (err, token) => {
        res.json({ success: true, token: "Bearer" + token });
      }
    );
  } else {
    return res.status(400).json({ message: "Incorrect Password" });
  }

  // res.send({ token: "samuel123" });
  // return console.log("token sent");
};

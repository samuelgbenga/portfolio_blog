import validator from "validator";
import isEmpty from "is-empty";

// validate user Registration input
export const validateRegInput = ({ name, email, password, password2 }) => {
  let errors = {};

  // converte to string if empty validator can only work with strings
  name = !isEmpty(name) ? name : "";
  email = !isEmpty(email) ? email : "";
  password = !isEmpty(password) ? password : "";
  password2 = !isEmpty(password2) ? password2 : "";

  // Check now with validator
  // for name field
  if (validator.isEmpty(name)) errors.name = "Name field is required";
  // validate email
  if (validator.isEmpty(email)) errors.email = "email field is required";
  else if (!validator.isEmail(email)) errors.email = "Invalid Email";
  // validate password
  if (validator.isEmpty(password))
    errors.password = "password field is required";
  else if (!validator.isLength(password, { min: 6, max: 30 }))
    errors.password = "Password must be at least 6 characters";
  // validate password2
  if (validator.isEmpty(password2))
    errors.password2 = "Confirm password field is required";
  else if (!validator.equals(password, password2))
    errors.password2 = "Passwords must match";

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

// validate user Login input
export const validateLoginInput = ({ email, password }) => {
  const errors = {};
  // convert empty fields to empty string
  email = !isEmpty(email) ? email : "";
  password = !isEmpty(password) ? password : "";

  // validate email and password
  if (validator.isEmpty(email)) errors.email = "email field is required";
  else if (!validator.isEmail(email)) {
    errors.email = "Invalid Email";
  }
  // validate password
  if (validator.isEmpty(password)) {
    errors.password = "password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

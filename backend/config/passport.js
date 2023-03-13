import { Strategy, ExtractJwt } from "passport-jwt";

import { User } from "../model/User.js";
import dotenv from "dotenv";

dotenv.config();
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.KEY;
// initiate dotenv

// initiate the options

const handlePassport = (passport) => {
  passport.use(
    new Strategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then((user) => {
          if (user) return done(null, user);
          return done(null, false);
        })
        .catch((err) => console.log(err));
    })
  );
};

export default handlePassport;

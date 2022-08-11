const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");

const User = mongoose.model("users");

//cookie data transfer
passport.serializeUser((user,done)=>{
    done(null,user.id)
})

passport.deserializeUser((id,done)=>{
    User.findById(id)
        .then(user=>{
            done(null,user)
        })
})

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_AUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      proxy:true,
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then((foundUser) => {
        if (foundUser) {
          // exisiting user in DB
          done(null, foundUser);
        }

        new User({ googleId: profile.id }) //store new user inDB
          .save()
          .then((user) => done(null, user));
      });
    }
  )
);

const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GOOGLE_CLIENT_ID = "783520308239-i0i58ohgkhlcpakrvfqtf6bdacb99npg.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback" 
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile)
    }

));

passport.serializeUser((user, done) =>{
    done(null, user)
})

passport.deserializeUser((user, done) =>{
    done(null,user)
})


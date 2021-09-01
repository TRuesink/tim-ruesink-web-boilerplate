const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const LocalStrategy = require('passport-local').Strategy;

const dummyDB = {
  User: [
    {
      id: '110321219224552213284',
      name: 'Tim Ruesink',
      email: 'timothy.ruesink@gmail.com',
    },
    {
      id: '101662193870953487028',
      name: 'Tim Ruesink',
      email: 'timswhimz@gmail.com',
    },
    {
      id: '1',
      name: 'Local User',
      email: 'localuser@email.com',
      password: 'password',
    },
  ],
};

passport.serializeUser((user, done) => {
  console.log('serialized');
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const user = dummyDB.User.filter((user) => user.id === id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      passReqToCallback: true,
    },
    (req, accessToken, refreshToken, profile, done) => {
      const user = {
        id: profile.id,
        name: profile._json.name,
        email: profile._json.email,
      };
      done(null, user);
    }
  )
);

passport.use(
  new LocalStrategy((username, password, done) => {
    const user = dummyDB.User.filter((user) => user.email === username)[0];
    console.log(user);
    if (!user) {
      return done(null, false);
    }
    if (user.password !== password) {
      return done(null, false);
    }
    return done(null, user);
  })
);

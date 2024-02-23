const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const AuthService = require('../services/AuthService');

const AuthServiceInstance = new AuthService();

module.exports = (app) => {
  // Initialize passport
  app.use(passport.initialize());
  app.use(passport.session());

  // Serialize the user
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // Deserialize the user
  passport.deserializeUser((id, done) => {
    AuthServiceInstance.findById(id)
      .then((user) => {
        done(null, user);
      })
      .catch((err) => {
        done(err);
      });
  });
  // Configure local strategy to be used for local login
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
      },
      async (email, password, done) => {
        try {
          const user = await AuthServiceInstance.login({ email, password });
          return done(null, user);
        } catch (err) {
          return done(err);
        }
      },
    ),
  );
  return passport;
};

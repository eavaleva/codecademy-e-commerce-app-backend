const passportLoader = require('./passport');
const routLoader = require('./routes');

module.exports = async (app) => {
  const passport = passportLoader(app);
  routLoader(app, passport);

  app.use((err, req, res, next) => {
    res.status(500).send(err);
    return res.status(status).send(err.message);
  });
};

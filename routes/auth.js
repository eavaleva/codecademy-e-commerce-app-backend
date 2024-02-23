const express = require('express');

const router = express.Router();
// Instantiate the AuthService class
const AuthService = require('../services/AuthService');

const AuthServiceInstance = new AuthService();

module.exports = (app, passport) => {
  app.use('/auth', router);
  // Register a new user and return the result with the user's
  // details after registration is successful
  router.post('/register', async (req, res, next) => {
    try {
      const response = await AuthServiceInstance.register(req.body);
      res.status(201).send(response);
    } catch (err) {
      next(err);
    }
  });

  router.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
    res.status(200).send(req.user);
  });

  // Login a user and return the result with the user's details after login is successful
  router.post('/login', passport.authenticate('local'), async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const response = await AuthServiceInstance.login({ email: username, password });
      res.status(200).send(response);
    } catch (err) {
      next(err);
    }
  });
};

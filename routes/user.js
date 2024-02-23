const express = require('express');

const router = express.Router();

const UserService = require('../services/UserService');

const userService = new UserService();

router.get('/:id', async (req, res, next) => {
  try {
    const user = await userService.get(req.params);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const user = await userService.update(req.body);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
// Path: routes/index.js

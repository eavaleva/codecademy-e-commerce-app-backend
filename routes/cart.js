const express = require('express');

const router = express.Router();
const CartService = require('../services/CartService');

const CartServiceInstance = new CartService();

module.exports = (app) => {
  app.use('/carts', router);
  // mine refers to the user's cart
  // Load the cart for the user and return the result with the items in the cart after the update
  router.get('/mine', async (req, res, next) => {
    try {
      const { userId } = req.user;
      const response = await CartServiceInstance.loadCart(userId);
      res.status(200).send(response);
    } catch (err) {
      next(err);
    }
  });
  // Create a new cart for the user and return the result
  router.post('/mine', async (req, res, next) => {
    try {
      const { id } = req.user;
      const response = await CartServiceInstance.create({ userId: id });
      res.status(201).send(response);
    } catch (err) {
      next(err);
    }
  });

  // update the cart of the user
  router.put('/mine', async (req, res, next) => {
    try {
      const { id } = req.user;

      const response = await CartServiceInstance.get({ id });
      res.status(200).send(response);
    } catch (err) {
      next(err);
    }
  });

  // eslint-disable-next-line max-len
  // Add an item to the cart for the user and return the result with the items in the cart after the update
  router.post('/mine/items', async (req, res, next) => {
    try {
      const { id } = req.user;
      const data = req.body;
      const response = await CartServiceInstance.addItem(id, data);
      res.status(201).send(response);
    } catch (err) {
      next(err);
    }
  });

  // Update the cart for the user and return the result with the items in the cart after the update
  router.put('/mine/items/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const response = await CartServiceInstance.updateItem(id, data);
      res.status(200).send(response);
    } catch (err) {
      next(err);
    }
  });
  // eslint-disable-next-line max-len
  // Delete the item from the cart for the user and return the result with the items in the cart after the removal
  router.delete('/mine/items/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const response = await CartServiceInstance.removeItem(id);
      res.status(200).send(response);
    } catch (err) {
      next(err);
    }
  });

  // Checkout the process
  router.post('/mine/checkout', async (req, res, next) => {
    try {
      const { id } = req.user;
      const { cartId, paymentInfo } = req.body;
      const response = await CartServiceInstance.checkout(id, cartId, paymentInfo);
      res.status(200).send(response);
    } catch (err) {
      next(err);
    }
  });
};

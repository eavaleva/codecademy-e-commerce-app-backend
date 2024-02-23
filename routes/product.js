const express = require('express');

const router = express.Router();
const ProductService = require('../services/ProductService');

const productService = new ProductService();

router.get('/', async (req, res, next) => {
  try {
    const products = await productService.list(req.query);
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const product = await productService.get(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
});

module.exports = router; // Export the router

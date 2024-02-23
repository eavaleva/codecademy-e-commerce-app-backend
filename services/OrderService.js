/* eslint-disable no-useless-catch */
/* eslint-disable class-methods-use-this */
const createError = require('http-errors');
const OrderModel = require('../models/order');

const OrderModelInstance = new OrderModel();

module.exports = class OrderService {
  async create(data) {
    try {
      const order = await OrderModelInstance.create(data);
      return order;
    } catch (err) {
      throw err;
    }
  }

  async list(options) {
    try {
      // Load orders
      const orders = await OrderModelInstance.find(options);

      return orders;
    } catch (err) {
      throw err;
    }
  }

  async findById(id) {
    try {
      // Check if order exists
      const order = await OrderModelInstance.findOne(id);

      // If no order found, reject
      if (!order) {
        throw createError(404, 'Order not found');
      }

      return order;
    } catch (err) {
      throw err;
    }
  }
};

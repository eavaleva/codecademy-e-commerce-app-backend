const createError = require('http-errors');
const CartModel = require('../models/cart');
const OrderModel = require('../models/order');
const CartItemModel = require('../models/cartItem');

module.exports = class CartService {
  // Create a new cart for the user and return the result
  async create(data) {
    const { userId } = data;
    try {
      // Create a new cart for the user and return the result
      const cart = new CartModel(data);
      // Call the create method from the CartModel class and pass the userId as an argument to create a new cart
      const result = await cart.create(userId);
      return result;
    } catch (err) {
      //  If an error occurs, throw a new error with the error message as the argument to the Error constructor
      throw new Error(err);
    }
  }
  // Load the cart for the user and return the result with the items in the cart
  async loadCart(userId) {
    try {
      // Load the cart for the user and return the result with the items in the cart
      const cart = await CartModel.findOneByUser(userId);
      if (!cart) {
        throw createError(404, 'Cart not found');
      }
      // Call the findAllByCart method from the CartItemModel class and pass the cart.id
      // as an argument to find all items in the cart
      // Assign the result to the items property of the cart object
      const items = await CartItemModel.findAllByCart(cart.id);
      cart.items = items;
      return cart;
    } catch (err) {
      // If an error occurs, throw a new error with the error message as the argument to the Error constructor
      throw new Error(err);
    }
  }
  // Update the cart for the user and return the result with the items in the cart after the update
  async addItem(userId, item) {
    try {
      // Load user cart based on ID
      const cart = await CartModel.findOneByUser(userId);

      // Create cart item
      const cartItem = await CartItemModel.create({ cartId: cart.id, ...item });

      return cartItem;
    } catch (err) {
      throw err;
    }
  }
  // Remove the item from the cart for the user and return the result with the items in the cart after the removal
  async removeItem(cartItemId) {
    try {
      // Delete cart item
      const result = await CartItemModel.delete(cartItemId);

      return result;
    } catch (err) {
      throw err;
    }
  }

  // Checkout the process

  async checkout(userId, cartId, paymentInfo) {
    try {
      // Load cart items
      const cartItems = CartItemModel.find(cartId);

      // Generate total price
      const totalPrice = cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);

      // Generate inital order
      const Order = new OrderModel({ userId, cartId, totalPrice, paymentInfo });
      Order.addItem(orderItems);
      await Order.create();

      // Make charge to payment  method
      const payment = await stripe.charges.create({
        amount: totalPrice,
        currency: 'euro',
        source: paymentInfo.token,
        description: 'Order payment',
      });

      // On successful charge to payment method, update cart status to completed

      try {
        const order = Order.update({ status: 'completed' });
        return order;
      } catch (err) {
        throw err;
      }
    } catch (err) {
      throw err;
    }
  }
};

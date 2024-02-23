/* eslint-disable max-len */
/* eslint-disable no-useless-catch */
/* eslint-disable class-methods-use-this */
const CartModel = require('../models/cart').default;
const OrderModel = require('../models/order');
const CartItemModel = require('../models/cartItem');

module.exports = class CartService {
  async create(data) {
    const { userId } = data;

    try {
      // Instantiate new cart and save
      const Cart = new CartModel();
      const cart = await Cart.create(userId);

      return cart;
    } catch (err) {
      throw err;
    }
  }

  async loadCart(userId) {
    try {
      // Load user cart based on ID
      const cart = await CartModel.findOneByUser(userId);

      // Load cart items and add them to the cart record
      const items = await CartItemModel.find(cart.id);
      cart.items = items;

      return cart;
    } catch (err) {
      throw err;
    }
  }

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

  async removeItem(cartItemId) {
    try {
      // Remove cart item by line ID
      const cartItem = await CartItemModel.delete(cartItemId);

      return cartItem;
    } catch (err) {
      throw err;
    }
  }

  async updateItem(cartItemId, data) {
    try {
      // Remove cart item by line ID
      const cartItem = await CartItemModel.update(cartItemId, data);

      return cartItem;
    } catch (err) {
      throw err;
    }
  }

  // FIXME: This method is not complete and is not used in the project
  // async checkout(cartId, userId, paymentInfo) {
  //   try {
  //     // eslint-disable-next-line global-require
  //     const stripe = require('stripe')('sk_test_FOY6txFJqPQvJJQxJ8jpeLYQ');

  //     // Load cart items
  //     const cartItems = await CartItemModel.find(cartId);

  //     // Generate total price from cart items
  //     // eslint-disable-next-line max-len, max-len
  //     const totalPrice = cartItems.reduce((accumulator, item) => accumulator + Number(item.price), 0);

  //     // Generate initial order
  //     const Order = new OrderModel({ total: totalPrice, userId });
  //     Order.addItems(cartItems);
  //     await Order.create();

  //     // Make charge to payment method (not required in this project)
  //     const charge = await stripe.charges.create({
  //       amount: total,
  //       currency: 'usd',
  //       source: paymentInfo.id,
  //       description: 'Charge',
  //     });

  //     // On successful charge to payment method, update order status to COMPLETE
  //     const order = Order.update({ status: 'COMPLETE' });

  //     return order;
  //   } catch (err) {
  //     throw err;
  //   }
  // }
};

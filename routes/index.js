const authRouter = require('./auth');
const cartRouter = require('./cart');
const productRouter = require('./product');
const userRouter = require('./user');
const orderRouter = require('./order');

module.exports = (app, passport) => {
  authRouter(app, passport);
  cartRouter(app);
  orderRouter(app);
  productRouter(app);
  userRouter(app);
};

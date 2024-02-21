const { Client } = require('pg');
const { DB } = require('./config');

(async () => {
  const usersTableStmt = `
    CREATE TABLE IF NOT EXISTS users (
      id              INT               PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
      email           VARCHAR(50),      
      password        TEXT,
      firstName       VARCHAR(50),
      lastName        VARCHAR(50),
      google          JSON,
      facebook        JSON
    );
  `;

  const productsTableStmt = `
    CREATE TABLE IF NOT EXISTS products (
      id              INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
      name            VARCHAR(50)     NOT NULL,
      price           BIGINT          NOT NULL,
      description     VARCHAR(50)     NOT NULL
    );
  `;

  const ordersTableStmt = `
    CREATE TABLE IF NOT EXISTS orders (
      id              INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
      total           INT             NOT NULL,
      status          VARCHAR(50)     NOT NULL,
      userId          INT             NOT NULL,
      created         DATE            NOT NULL,
      modified        DATE            NOT NULL,
      FOREIGN KEY (userId) REFERENCES users(id)
    );
  `;

  const orderItemsTableStmt = `
    CREATE TABLE IF NOT EXISTS orderItems (
      id              INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
      created         DATE            NOT NULL,
      orderId         INT             NOT NULL,
      qty             INT             NOT NULL,
      price           INT             NOT NULL,
      productId       INT             NOT NULL,
      name            VARCHAR(50)     NOT NULL,
      description     VARCHAR(200)    NOT NULL,
      FOREIGN KEY (orderId) REFERENCES orders(id)
    );
  `;

  const cartsTableStmt = `
    CREATE TABLE IF NOT EXISTS carts (
      id              INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
      userId          INT             NOT NULL,
      modified        DATE            NOT NULL,
      created         DATE            NOT NULL,
      FOREIGN KEY (userId) REFERENCES users(id)
    );
  `;

  const cartItemsTableStmt = `
    CREATE TABLE IF NOT EXISTS cartItems (
      id              INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
      cartId          INT             NOT NULL,
      productId       INT             NOT NULL,
      qty             INT             NOT NULL,
      FOREIGN KEY (cartId) REFERENCES carts(id),
      FOREIGN KEY (productId) REFERENCES products(id)
    );
  `;

  const client = new Client({
    user: DB.PGUSER,
    host: DB.PGHOST,
    database: DB.PGDATABASE,
    password: DB.PGPASSWORD,
    port: DB.PGPORT,
  });

  try {
    await client.connect();
    // Create tables
    await client.query(usersTableStmt);
    await client.query(productsTableStmt);
    await client.query(ordersTableStmt);
    await client.query(orderItemsTableStmt);
    await client.query(cartsTableStmt);
    await client.query(cartItemsTableStmt);
    console.log('Connected to database');
  } catch (error) {
    console.error('Error connecting to database', error);
  } finally {
    await client.end();
  }
})();

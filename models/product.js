/* eslint-disable class-methods-use-this */
const db = require('../db');

module.exports = class ProductModel {
  /**
   * List products
   * @param  {Object} options [Query options]
   * @return {Array}          [Array of products]
   */
  // Find all products in the database and return them as an array of objects
  // or an empty array if no products are found.
  // eslint-disable-next-line no-unused-vars
  async find(options) {
    try {
      const statement = 'SELECT * FROM products';
      const result = await db.query(statement);
      return result.rows || [];
    } catch (err) {
      throw new Error(err);
    }
  }

  /**
   * Retrieve product by ID
   * @param  {Object}      id [Product ID]
   * @return {Object|null}    [Product record]
   */
  // Find a single product in the database by its ID
  // and return it as an object or null if no product is found.
  async findOne(id) {
    try {
      const statement = 'SELECT * FROM products WHERE id = $1';
      const result = await db.query(statement, [id]);
      return result.rows?.[0] || null;
    } catch (err) {
      throw new Error(err);
    }
  }
};

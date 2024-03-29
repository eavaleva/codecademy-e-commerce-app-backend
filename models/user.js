const pgp = require('pg-promise')({ capSQL: true });
/* eslint-disable class-methods-use-this */
const db = require('../db');
// capSQL is a property that allows you to capitalize all SQL queries generated by the library.

module.exports = class UserModel {
  async create(data) {
    try {
      const statement = `${pgp.helpers.insert(data, null, 'users')}RETURNING *`;
      const result = await db.query(statement);
      return result.rows?.[0] || null;
    } catch (err) {
      throw new Error(err);
    }
  }

  async update(data) {
    try {
      const { id, ...params } = data;
      // eslint-disable-next-line no-template-curly-in-string
      const condition = pgp.as.format('WHERE id = ${id} RETURNING *', { id });
      const statement = pgp.helpers.update(params, null, 'users') + condition;
      const result = await db.query(statement);
      return result.rows?.[0] || null;
    } catch (err) {
      throw new Error(err);
    }
  }

  async findOneByEmail(email) {
    try {
      const statement = 'SELECT * FROM users WHERE email = $1';
      const result = await db.query(statement, [email]);
      return result.rows?.[0] || null;
    } catch (err) {
      throw new Error(err);
    }
  }

  async findOneById(id) {
    try {
      const statement = 'SELECT * FROM users WHERE id = $1';
      const result = await db.query(statement, [id]);
      return result.rows?.[0] || null;
    } catch (err) {
      throw new Error(err);
    }
  }
};

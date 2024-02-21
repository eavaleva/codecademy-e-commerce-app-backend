module.exports = {
  PORT: process.env.SERVER_PORT || 3000,
  DB: {
    PGHOST: process.env.PGHOST || 'localhost',
    PGUSER: process.env.PGUSER || 'postgres',
    PGDATABASE: process.env.PGDATABASE || 'postgres',
    PGPASSWORD: process.env.PGPASSWORD || 'postgres',
    PGPORT: process.env.PGPORT || 5432,
  },
  JWT: {
    SESSION_SECRET: process.env.JWT_SECRET || 'secret',
  },
};
// Path: index.js
// Compare this snippet from node_modules/express/index.js:
// /*!
//  * express

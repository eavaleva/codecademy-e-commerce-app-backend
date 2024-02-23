const express = require('express');

const app = express();

const loaders = require('./loaders');

const { PORT } = require('./config');

async function startServer() {
  // Init application loaders
  loaders(app);

  app.get('/', (_req, _res) => _res.status(200).send({ message: 'Hello World bla bla bla' }));

  // Start server
  app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
  });
}

startServer();

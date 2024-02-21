const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const nodemon = require('nodemon');

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 3000;

// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.get('/', (_req, _res) => {
  return _res.status(200).send({ message: 'Hello World bla bla bla' });
});

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

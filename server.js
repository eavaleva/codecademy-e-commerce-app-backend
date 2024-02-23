const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const session = require('express-session');

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Create a session
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  }),
);
app.get('/', (_req, _res) => _res.status(200).send({ message: 'Hello World bla bla bla' }));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

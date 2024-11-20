const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const db = require('./db');

app.use(cors());
app.use(express.json());

const routes = require('./routes');
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
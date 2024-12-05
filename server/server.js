const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
 dotenv.config({ path: './.env' });
// require('dotenv').config();

const db = require('./db');
const path = require('path');

app.use(cors());
app.use(express.json());

const routes = require('./routes');

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
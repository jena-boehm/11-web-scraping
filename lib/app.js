const express = require('express');
const app = express();

app.use(express.json());

app.use('/books', require('./controller/book'));

module.exports = app;

const { Router } = require('express');
const Book = require('../models/book.js');

module.exports = Router()
  .post('/', (req, res, next) => {
    Book
      .insert(req.body)
      .then((book) => res.send(book))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Book
      .find()
      .then(book => res.send(book))
      .catch(next);
  });

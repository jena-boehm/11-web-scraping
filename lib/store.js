const Book = require('./models/book');

const store = async books => {
  return await Promise.all(books.map(book => Book.insert(book)));
};

module.exports = store;

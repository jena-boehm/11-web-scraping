const Book = require('./models/book');

const store = async books => {
  return await Promise.all(books.map(book => Book.insert(book)));
};

module.exports = store;


//use to store books in a database
//will need a model
//use model to insert into a row into the database for each book in the book array

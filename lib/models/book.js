const pool = require('../utils/pool');

module.exports = class Book {
    id;
    title;
    cover;
    rating;
    price;
    inStock;

    constructor(row) {
      this.id = row.id;
      this.title = row.title;
      this.cover = row.cover;
      this.rating = row.rating;
      this.price = row.price;
      this.inStock = row.in_stock;
    }

    
};

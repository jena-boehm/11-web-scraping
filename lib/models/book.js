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

    static async insert(book) {
      const { rows } = await pool.query(`
      INSERT INTO books 
        (title, cover, rating, price, in_stock) 
      VALUES 
        ($1, $2, $3, $4, $5) 
      RETURNING *
      `, [book.title, book.cover, book.rating, book.price, book.inStock]
      );
    
      return new Book(rows[0]);
    }

    static async find() {
      const { rows } = await pool.query(
        'SELECT * FROM books'
      );
    
      return rows.map(row => new Book(row));
    }
};

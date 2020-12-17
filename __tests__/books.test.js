const fs = require('fs');
const pool = require('../lib/utils/pool');
const request = require('supertest');
const app = require('../lib/app');
const Book = require('../lib/models/book');


describe('web-scraping routes', () => {
  
  beforeEach(async() => {
    await pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });
  
  afterAll(() => {
    return pool.end();
  });

  it('returns all books', async() => {
    const books = await Promise.all([
      {
        id: '52',
        title: 'Tipping the Velvet',
        cover: 'media/cache/26/0c/260c6ae16bce31c8f8c95daddd9f4a1c.jpg',
        rating: 'One',
        price: '£53.74',
        inStock: true
      },
      {
        id: '55',
        title: 'Soumission',
        cover: 'media/cache/3e/ef/3eef99c9d9adef34639f510662022830.jpg',
        rating: 'One',
        price: '£50.10',
        inStock: true
      }
    ].map(book => Book.insert(book)));

    return request(app)
      .get('/books')
      .then(res => {
        books.forEach(book => {
          expect(res.body).toContainEqual(book);
        });
      });
  });
});

const parse = document => {
  const books = document.querySelectorAll('.col-xs-6');

  return [...books].map(book => ({
    title: book.querySelector('h3').textContent,
    cover: book.querySelector('img.thumbnail').src,
    rating: book.querySelector('p.star-rating').classList[1],
    price: book.querySelector('.price_color').textContent,
    inStock: !!book.querySelector('.instock')
  }));
}; 


module.exports = parse;

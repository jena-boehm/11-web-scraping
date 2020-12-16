const parse = document => {
  const books = document.querySelectorAll('.col-xs-6');

  return [...books].map(book => ({
    title: book.querySelector('h3').textContent,
    cover: book.querySelector('div.image_container a img.thumbnail').currentSrc,
    rating: book.querySelector('.star-rating:nth-child(2)'),
    price: book.querySelector('.price_color').textContent,
    inStock: !!book.querySelector('.instock')
  }));
}; 


module.exports = parse;

function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
  .then((resp) => resp.json())
  .then((data) => {
    // let books = data
    // console.log(books)
    renderBooks(data)
    
  })
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

// fetch('https://anapioficeandfire.com/api/books')
// .then((resp) => resp.json())
// .then((data) => {
//   let books = data;
//   console.log(books)
//   console.log(books[4].characters[1031])
//   let numOfPages = 0
//   books.forEach(book => {
//     numOfPages = numOfPages + book.numberOfPages
//   })
//   console.log(numOfPages)
// })

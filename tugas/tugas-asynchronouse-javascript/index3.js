var filterBooksPromise = require('./promise2.js')

// bukunya berwarna dan jumlah halamannya 50
filterBooksPromise(true, 50)
  .then(function (books) {
    console.log(books);
  })
  .catch(function (error) {
    console.log(error);
  });

// bukunya tidak berwarna dan jumlah halamannya 250 async/await untuk kondisi ini
async function getBooks() {
  try {
    var books = await filterBooksPromise(false, 250);
    console.log(books);
  } catch (error) {
    console.log(error);
  }
}
getBooks();


// bukunya tidak berwarna dan jumlah halamannya 250 async/await untuk kondisi ini
async function getBooks2() {
  try {
    var books = await filterBooksPromise(false, 30);
    console.log(books);
  } catch (error) {
    console.log(error.message);
  }
}
getBooks2();
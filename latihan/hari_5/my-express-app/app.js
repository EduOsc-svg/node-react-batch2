const express = require('express');
const app = express();
const port = 3000;

let movies = [
{id: 1, title: "Spider-Man", year: 2002},
{id: 2, title: "John Wick", year: 2014},
{id: 3, title: "The Avengers", year: 2012},
{id: 4, title: "Logan", year: 2017},
]

const getmovies = (req, res) => {
  let table = "<h1>ini tampilan movies</h1><table><tr><th>ID</th><th>Title</th><th>Year</th></tr>";
  let id = req.query.id;
  if (id) {
      const movie = movies.find(m => m.id === parseInt(id));
      if (movie) {
          table += `<tr><td>${movie.id}</td><td>${movie.title}</td><td>${movie.year}</td></tr>`;
      } else {
          table += `<tr><td colspan="3">Movie not found</td></tr>`;
      }
  } else {
      movies.forEach(movie => {
          table += `<tr><td>${movie.id}</td><td>${movie.title}</td><td>${movie.year}</td></tr>`;
      });
  }
  table += "</table>";
  res.send( {table} );
}

app.get('/movies', getmovies);

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


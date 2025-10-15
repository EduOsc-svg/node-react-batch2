const express = require('express')
const { createMovie, readMovies, readMoviesByID, updateMovie, deleteMovie } = require('../controllers/movieController')
const router = express.Router()


router.post('/movie', createMovie)
router.get('/movie', readMovies)
router.get('/movie/:id', readMoviesByID)
router.put('/movie/:id', updateMovie)
router.delete('/movie/:id', deleteMovie)

module.exports = router
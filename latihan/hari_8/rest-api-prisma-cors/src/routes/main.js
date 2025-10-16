const express = require('express')
const { createMovie, readMovies, readMoviesByID, updateMovie, deleteMovie } = require('../controllers/movieController')
const router = express.Router()


router.post('/movies', createMovie)
router.get('/movies', readMovies)
router.get('/movies/:id', readMoviesByID)
router.put('/movies/:id', updateMovie)
router.delete('/movies/:id', deleteMovie)
module.exports = router
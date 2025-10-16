const express = require('express')
const { createMovie, readMovies, readMoviesByID, updateMovie, deleteMovie } = require('../controllers/movieController')
const { basicAuth } = require('../middleware/basicAuth')
const router = express.Router()


router.post('/movies',basicAuth ,createMovie)
router.get('/movies', basicAuth, readMovies)
router.get('/movies/:id', basicAuth, readMoviesByID)
router.put('/movies/:id',basicAuth, updateMovie)
router.delete('/movies/:id',basicAuth, deleteMovie)

module.exports = router
const express = require('express')
const { createMovie, readMovies, readMoviesByID, updateMovie, deleteMovie } = require('../controllers/movieController')
const { createCategory, readCategories, updateCategory, deleteCategory } = require('../controllers/CategoryController')
const { basicAuth } = require('../middleware/basicAuth')
const router = express.Router()


router.post('/movies',basicAuth ,createMovie)
router.get('/movies', basicAuth, readMovies)
router.get('/movies/:id', basicAuth, readMoviesByID)
router.put('/movies/:id',basicAuth, updateMovie)
router.delete('/movies/:id',basicAuth, deleteMovie)
router.post('/categories', basicAuth, createCategory)
router.get('/categories', basicAuth, readCategories)
router.put('/categories/:id', basicAuth, updateCategory)
router.delete('/categories/:id', basicAuth, deleteCategory)

module.exports = router
const express = require('express')
const { createMovie, readMovies, readMoviesByID, updateMovie, deleteMovie } = require('../controllers/movieController')
const { createCategory, readCategories, updateCategory, deleteCategory } = require('../controllers/CategoryController')
const router = express.Router()


router.post('/movies',createMovie)
router.get('/movies',  readMovies)
router.get('/movies/:id',  readMoviesByID)
router.put('/movies/:id', updateMovie)
router.delete('/movies/:id', deleteMovie)
router.post('/categories',  createCategory)
router.get('/categories',  readCategories)
router.put('/categories/:id',  updateCategory)
router.delete('/categories/:id',  deleteCategory)

module.exports = router
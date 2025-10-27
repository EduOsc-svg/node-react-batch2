const e = require('express')
const { PrismaClient: prismaClient } = require('../../generated/prisma')

exports.createMovie = async (req, res) => {
    let { title, year, categoryId } = req.body

    // coerce numeric fields
    year = year !== undefined ? parseInt(year) : undefined
    categoryId = categoryId !== undefined ? parseInt(categoryId) : undefined

    // basic validation
    if (!title || isNaN(year) || isNaN(categoryId)) {
        return res.status(400).json({ message: 'Invalid input: title, year and categoryId are required', status: 'error' })
    }

    try {
        const movie = await new prismaClient().movies.create({
            data: {
                title,
                year,
                categoryId,
            },
        })

        res.status(201).json({
            data: movie,
            message: 'Movie Was Successfully Created',
            status: 'success'
        })
    } catch (error) {
        console.error('Error creating movie:', error)
        res.status(500).json({
            message: 'Failed to create movie',
            status: 'error'
        })
        return
    }
   
    }

    exports.readMovies = async (req, res) => {
        try {
            const movies = await new prismaClient().movies.findMany()
            res.json({
                data: movies,
                message: 'Movies retrieved successfully',
                status: 'success'
            })
        } catch (error) {
            console.error('Error retrieving movies:', error)
            res.status(500).json({
                message: 'Failed to retrieve movies',
                status: 'error'
            })
        }
    }

    exports.readMoviesByID = async (req, res) => {
        let {id} = req.params
        id = parseInt(id)

        try {
            const movie = await new prismaClient().movies.findUnique({
                where: { id }
            })

            if (!movie) {
                return res.status(404).json({
                    message: 'Movie not found',
                    status: 'error'
                })
            }

            res.json({
                data: movie,
                message: 'Movie retrieved successfully',
                status: 'success'
            })
        } catch (error) {
            console.error('Error retrieving movie:', error)
            res.status(500).json({
                message: 'Failed to retrieve movie',
                status: 'error'
            })
        }
    }

    exports.updateMovie = async (req, res) => {
        let { id } = req.params
        let { title, year, categoryId } = req.body
        id = parseInt(id)

        // coerce and validate
        year = year !== undefined ? parseInt(year) : undefined
        categoryId = categoryId !== undefined ? parseInt(categoryId) : undefined

        if (!title || isNaN(year) || isNaN(categoryId)) {
            return res.status(400).json({ message: 'Invalid input: title, year and categoryId are required', status: 'error' })
        }

        try {
            const movie = await new prismaClient().movies.update({
                where: { id },
                data: { title, year, categoryId },
            })
            res.json({
                data: movie,
                message: 'Movie Was Successfully Updated',
                status: 'success',
            })

        } catch (error) {
            console.error('Error updating movie:', error)
            res.status(500).json({
                message: 'Failed to update movie',
                status: 'error',
            })
            return
        }

    }

    exports.deleteMovie = async (req, res) => {
        let {id} = req.params
        id = parseInt(id)
        try {
            const movie = await new prismaClient().movies.delete({
                where: { id }
            })
            res.json({
                data: movie,
                message: 'Movie Was Successfully Deleted',
                status: 'success'
            })
        } catch (error) {
            console.error('Error deleting movie:', error)
            res.status(500).json({
                message: 'Failed to delete movie',
                status: 'error'
            })
        }
    }

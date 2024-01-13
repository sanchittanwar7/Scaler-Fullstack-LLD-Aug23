const router = require('express').Router()
const Movie = require('../models/movieModel')

router.post('/add', async (req, res) => {
    try {
        const movie = new Movie(req.body)
        await movie.save()
        res.send({
            success: true,
            message: 'Movie created'
        })
    } catch (error) {
        res.send({
            success: false,
            message: 'Internal Server Error'
        })
    }    
})

router.get('/getAllMovies', async (req, res) => {
    try {
        const movies = await Movie.find()
        res.send({
            success: true,
            message: 'Movies fetched successfully',
            data: movies
        })
    } catch (error) {
        res.send({
            success: false,
            message: 'Something went wrong',
            data: error
        })
    }
})

router.get('/getMovieById/:movieId', async (req, res) => {
    try {
        const movieId = req.params.movieId
        const movie = await Movie.findOne({_id: movieId})
        res.send({
            success: true,
            message: 'Movie fetched successfully',
            data: movie
        })
    } catch (error) {
        res.send({
            success: false,
            message: 'Something went wrong',
            data: error
        })
    }
})

router.post('/delete', async (req, res) => {
    try {
        await Movie.findByIdAndDelete(req.body.movieId)
        res.send({
            success: true,
            message: 'Movie deleted successfully'
        })
    } catch (error) {
        res.send({
            success: false,
            message: 'Something went wrong',
        })
    }
})

router.put('/update', async (req, res) => {
    try {
        await Movie.findByIdAndUpdate(req.body.movieId, req.body)
        res.send({
            success: true,
            message: 'Movie updated successfully'
        })
    } catch (error) {
        res.send({
            success: false,
            message: 'Something went wrong',
        })
    }
})

exports.router = router
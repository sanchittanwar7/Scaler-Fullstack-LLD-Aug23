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

exports.router = router
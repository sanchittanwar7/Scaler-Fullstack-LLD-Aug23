const router = require('express').Router()
const Show = require('../models/showModel')

router.post('/add', async (req, res) => {
    try {
        const show = new Show(req.body)
        await show.save()
        res.send({
            success: true,
            message: 'Show created'
        })
    } catch (error) {
        res.send({
            success: false,
            message: 'Internal Server Error'
        })
    }    
})

router.get('/getAllShowsByTheatreId/:theatreId', async (req, res) => {
    try {
        const theatreId = req.params.theatreId
        const shows = await Show.find({theatre: theatreId}).populate('movie')
        res.send({
            success: true,
            message: 'Shows fetched successfully',
            data: shows
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
        console.log(req.body)
        await Show.findByIdAndDelete(req.body.showId)
        res.send({
            success: true,
            message: 'Show deleted successfully'
        })
    } catch (error) {
        res.send({
            success: false,
            message: 'Something went wrong',
        })
    }
})

// router.get('/getAllTheatres', async (req, res) => {
//     try {
//         const theatres = await Theatre.find().populate('owner')
//         res.send({
//             success: true,
//             message: 'Theatres fetched successfully',
//             data: theatres
//         })
//     } catch (error) {
//         res.send({
//             success: false,
//             message: 'Something went wrong',
//             data: error
//         })
//     }
// })



// router.put('/update', async (req, res) => {
//     try {
//         await Theatre.findByIdAndUpdate(req.body.theatreId, req.body)
//         res.send({
//             success: true,
//             message: 'Theatre updated successfully'
//         })
//     } catch (error) {
//         res.send({
//             success: false,
//             message: 'Something went wrong',
//         })
//     }
// })

exports.router = router
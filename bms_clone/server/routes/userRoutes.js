const router = require('express').Router()
const User = require('../models/userModel')

router.post('/register', async (req, res) => {
    try {
        const user = req.body
        const userExists = await User.findOne({email: user.email})

        if (userExists) {
            res.send({
                success: false,
                message: 'User with this email already exists in DB'
            })
        }

        const newUser = new User(user)
        newUser.save()

        res.send({
            success: true,
            message: 'User successfully registered'
        })
    } catch (error) {
        console.log(error)
        res.send({
            success: false,
            message: 'Internal Server Error'
        })
    }
    
})

exports.router = router
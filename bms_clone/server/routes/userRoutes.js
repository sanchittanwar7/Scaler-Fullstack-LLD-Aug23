const router = require('express').Router()
const User = require('../models/userModel')
const bcrypt = require('bcrypt')

router.post('/register', async (req, res) => {
    try {
        const user = req.body
        const userExists = await User.findOne({email: user.email})

        if (userExists) {
            return res.send({
                success: false,
                message: 'User with this email already exists in DB'
            })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(user.password, salt)

        const newUser = new User({...user, password: hashedPassword})
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
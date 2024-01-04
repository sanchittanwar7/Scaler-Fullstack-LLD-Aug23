const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {

    try {
        const token = req.headers.authorization.split(' ')[1]
        const userId = jwt.verify(token, process.env.jwt_secret).userId
        req.body.userId = userId

        next()
    } catch (error) {
        res.status(403).send({
            success: false,
            message: "User is unauthorized"
        })
    }
}
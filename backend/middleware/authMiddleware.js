const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require("../models/userModel")

const protect = asyncHandler(async (req, res, next) => {
    console.log("protect is running")
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try {
            //get token from header
            console.log(req.headers.authorization)
            token = req.headers.authorization.split(' ')[1]

            //verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //Get user from the token
            req.user = await User.findById(decoded.id).select('-password')

            next()
        } catch (error) {
            console.log(error);
            res.status(401)
            throw new Error("Not authorized")
        }   
    }
    if(!token) {
        res.status(401)
        throw new Error("Not authorized, no token")
    }
})
module.exports = {protect}
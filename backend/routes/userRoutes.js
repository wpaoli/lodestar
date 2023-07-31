const express = require('express')
const router = express.Router()
const { regsiterUser, getMe, loginUser } = require('../controllers/userController')
const {protect} = require("../middleware/authMiddleware")

router.post('/', regsiterUser)
router.post('/login', loginUser)
router.get('/profile', protect, getMe)

module.exports = router
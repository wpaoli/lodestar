const express = require('express')
const router = express.Router();
const { setIdea, getIdeas, updateIdea, deleteIdea } = require('../controllers/ideasController')
const { protect } = require("../middleware/authMiddleware")
// @route    /api/ideas
router.route('/').get(protect, getIdeas).post(protect, setIdea);
router.route('/:id').put(protect, updateIdea).delete(protect, deleteIdea);


module.exports = router
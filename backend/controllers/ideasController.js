const asyncHandler = require('express-async-handler')
const Idea = require('../models/ideaModel')
const User = require('../models/userModel')

// @desc     GetIdeas
// @route    GET /api/ideas
// @access   Private    
const getIdeas = asyncHandler(async (req, res) => {
    const ideas = await Idea.find({ user: req.user.id })
    res.status(200).json(ideas);
    
})

// @desc     SetIdea
// @route    POST /api/ideas
// @access   Private    
const setIdea = asyncHandler(async(req, res) => {
    if(!req.body){
        res.status(400);
        throw new Error('please add idea')
    } else {
        const idea = await Idea.create({
            title: req.body.title,
            frequency: req.body.frequency,
            description: req.body.description,
            user: req.user.id
        })
        
        res.status(200).json(idea);
    }
})

// @desc     UpdateIdea
// @route    PUT /api/ideas/id
// @access   Private    
const updateIdea = asyncHandler(async(req, res) => {
    const idea = await Idea.findById(req.params.id)

    if(!idea){
        res.status(400)
        throw new Error('Idea not found')
    }

    const updatedIdea = await Idea.findByIdAndUpdate(req.params.id, req.body, {new:true})

    res.status(200).json(updatedIdea);
})

// @desc     DeleteIdea
// @route    DELETE /api/ideas/id
// @access   Private    
const deleteIdea = asyncHandler(async(req, res) => {
    const idea = await Idea.findById(req.params.id)

    if(!idea){
        res.status(400)
        throw new Error('goal not found')
    }

    const deletedIdea = await Idea.findByIdAndDelete(req.params.id, req.body)
    

    res.status(200).json({ message: `Delete Idea ${req.params.id}`});
})

module.exports = {
    getIdeas,setIdea, updateIdea, deleteIdea 
}
const mongoose = require('mongoose')
const ideaSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: [true, 'please add some words']
    },
    frequency: {
        type: Number
    },
    description: {
        type: String        
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Idea', ideaSchema)
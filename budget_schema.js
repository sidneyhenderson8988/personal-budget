const mongoose = require("mongoose")

const budgetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true, 
    },
    budget: {
        type: Number,
        trim: true,
        required: true,
    },
    color: {
        type: String,
        required: true,
        unique: true,
        lowercase: true, 
    }

}, {collection: 'budgetCollection'})


module.exports = mongoose.model('budgetCollection', budgetSchema)
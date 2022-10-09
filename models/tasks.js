const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: true
    },
    date: {
        type: Date,
    }
})

const task = mongoose.model('Tasks', tasksSchema)
module.exports = task;
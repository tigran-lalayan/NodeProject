const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    project: {
        type: String,
        required: true
    },
    for: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Projects', ProjectSchema);

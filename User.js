const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        //source: https://masteringjs.io/tutorials/mongoose/unique
        unique : true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    joined: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('User', UserSchema);
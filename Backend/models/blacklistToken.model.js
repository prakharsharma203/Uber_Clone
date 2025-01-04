const mongoose = require('mongoose');

const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        expires:86400 //24hrs in seconds
    }
});

module.exports = mongoose.model('blacklistToken', blacklistTokenSchema);
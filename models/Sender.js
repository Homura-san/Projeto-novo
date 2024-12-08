const mongoose = require('mongoose');

const Sender = mongoose.model('Sender', {
    name: String,
    package: String,
    adress: String
});

module.exports = Sender;
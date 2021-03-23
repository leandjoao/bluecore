const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    type: String,
});

module.exports = mongoose.model('Contact', ContactSchema);
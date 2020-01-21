const mongoose = require('mongoose')
const microcontrollerSchema = new mongoose.Schema({
    name: String,
    data: Object
});

module.exports = mongoose.model('microcontrollers', microcontrollerSchema);
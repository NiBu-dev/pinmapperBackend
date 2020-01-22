const mongoose = require('mongoose')
const microcontrollerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    data: {
        type: Object,
        required: true
    },
});

module.exports = mongoose.model('microcontrollers', microcontrollerSchema);
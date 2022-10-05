const mongoose = require('mongoose')

const CarDateSchema = new mongoose.Schema({
    numberPlate: { type: String, require: true },
    date: { type: String, require: true },
    hour: { type: String, require: true },
    status: { type: Boolean, default: false }
}, {
    versionKey: false
})

module.exports = mongoose.model('CarDate', CarDateSchema) 
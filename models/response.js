const mongoose = require('mongoose')
const Schema = mongoose.Schema

const responseSchema = new Schema({
    age: {
        type: String,
        required: true
    },
    income: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    scenario1: {
        type: String,
        default: ''
    },
    scenario2: {
        type: String,
        default: ''
    },
    scenario3: {
        type: String,
        default: ''
    },
    scenario4: {
        type: String,
        default: ''
    },
    scenario5: {
        type: String,
        default: ''
    }
}, {
    timestamps: true
})

var Responses = mongoose.model('Response', responseSchema)

module.exports = Responses
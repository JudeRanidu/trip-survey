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
    scn1_choice: {
        type: String,
        default: ''
    },
    scn1_TA_var: {
        type: String,
        required: true
    },
    scn1_TB_var: {
        type: String,
        required: true
    },
    scn1_TA_cost: {
        type: String,
        required: true
    },
    scn1_TB_cost: {
        type: String,
        required: true
    },
    scn2_choice: {
        type: String,
        default: ''
    },
    scn2_TA_var: {
        type: String,
        required: true
    },
    scn2_TB_var: {
        type: String,
        required: true
    },
    scn2_TA_cost: {
        type: String,
        required: true
    },
    scn2_TB_cost: {
        type: String,
        required: true
    },
    scn3_choice: {
        type: String,
        default: ''
    },
    scn3_TA_var: {
        type: String,
        required: true
    },
    scn3_TB_var: {
        type: String,
        required: true
    },
    scn3_TA_cost: {
        type: String,
        required: true
    },
    scn3_TB_cost: {
        type: String,
        required: true
    },
    scn4_choice: {
        type: String,
        default: ''
    },
    scn4_TA_var: {
        type: String,
        required: true
    },
    scn4_TB_var: {
        type: String,
        required: true
    },
    scn4_TA_cost: {
        type: String,
        required: true
    },
    scn4_TB_cost: {
        type: String,
        required: true
    },
    scn5_choice: {
        type: String,
        default: ''
    },
    scn5_TA_var: {
        type: String,
        required: true
    },
    scn5_TB_var: {
        type: String,
        required: true
    },
    scn5_TA_cost: {
        type: String,
        required: true
    },
    scn5_TB_cost: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

var Responses = mongoose.model('Response', responseSchema)

module.exports = Responses
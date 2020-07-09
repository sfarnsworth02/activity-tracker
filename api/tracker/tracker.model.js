const mongoose = require('mongoose');

const trackerSchema = new mongoose.Schema({
    isComplete: {
        type: Boolean,
        required: false,
        unique: false,
    },
    quickNote: {
        tag: Array,
        required: false,
        unique: false,
    }
},
{
    timestamps: true,
});

module.exports = trackerSchema;
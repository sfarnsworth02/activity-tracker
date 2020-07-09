const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    activity: {
        type: String,
        required: true,
        unique: false,
    },
    description: {
        type: String, 
        required: false,
        unique: false,
    },
    duration: {
        type: Number,
        required: false,
        unique: false,
    },
    start: {
        type: Date,
        required: false,
        unique: false,
    },
    retrospective: {
        tags: {
            type: String,
            required: false,
            unique: false,
        },
        notes: {
            type: String,
            required: false,
            unique: false,
        },
    },
},
{
    timestamps: true,
});

module.exports = activitySchema;
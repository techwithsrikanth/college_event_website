const mongoose = require('mongoose');

const createeventSchema = new mongoose.Schema({
    eventType: {
        type: String,
        required: true,
    },
    eventName: {
        type: String,
        required: true,
    },
    collegeName: {
        type: String,
        required: true,
    },
    posterimg: {
        type: String, // Assuming storing the image path or URL as a string
        required: true,
        unique: true,
    },
    cashPrize: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    website: {
        type: String,
        required: true,
    },
    regnfees: {
        type: String,
        required: true,
    },
    
    // Add more fields if needed
});

module.exports = mongoose.model('CreateEvent', createeventSchema);

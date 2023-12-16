const mongoose = require('mongoose');

const OrgUserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    college: {
        type: String,
        required: true,
    },
    idcard: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("OrgUser", OrgUserSchema);

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },

    country: {
        name: { type: String },
        flag: { type: String },
        dialCode: { type: String },
    },

    phoneNumber: { type: String }, // store number without country code
    otp: { type: String },
    otpExpires: { type: Date },
    resetToken: { type: String },
    resetTokenExpires: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);

const mongoose = require('mongoose');

const streakSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    solvedDays: {
        type: Map,
        of: Number,
        default: {}   // example: { "2025-10-01": 3 }
    },
}, { timestamps: true });

module.exports = mongoose.model('Streak', streakSchema);

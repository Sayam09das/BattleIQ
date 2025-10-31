// routes/quizRoute.js
const express = require("express");
const Quiz = require("../models/Quiz");
const router = express.Router();

// Get all quizzes
router.get("/", async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.json({ success: true, quizzes });
    } catch (err) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

module.exports = router;

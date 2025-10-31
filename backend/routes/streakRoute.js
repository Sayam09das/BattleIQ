const express = require('express');
const Streak = require('../models/Streak');
const { authenticateToken } = require('../middleware/authMiddleware');

const router = express.Router();

// ✅ Get streak data
router.get("/streak", authenticateToken, async (req, res) => {
    try {
        const userId = req.user.id; // extracted from JWT

        let streak = await Streak.findOne({ userId });

        // If user has no streak data yet, create empty record
        if (!streak) {
            streak = new Streak({ userId, solvedDays: {} });
            await streak.save();
        }

        return res.json({
            success: true,
            streakData: streak
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

// ✅ Update streak when user completes quiz
router.post("/streak/update", authenticateToken, async (req, res) => {
    try {
        const userId = req.user.id;
        const today = new Date().toISOString().split("T")[0]; // "YYYY-MM-DD"

        let streak = await Streak.findOne({ userId });

        // ✅ If no streak, create record
        if (!streak) {
            streak = new Streak({ userId, solvedDays: {} });
        }

        const currentCount = streak.solvedDays.get(today) || 0;
        streak.solvedDays.set(today, currentCount + 1);

        await streak.save();

        res.json({ success: true, message: "Streak updated!" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});


module.exports = router;

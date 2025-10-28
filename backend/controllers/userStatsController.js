// controllers/userStatsController.js

exports.getUserStats = async (req, res) => {
    try {
        // Assuming you use JWT auth — user info is in req.user
        const userId = req.user ? req.user.id : null;

        // Example: later replace this with actual DB logic
        const stats = {
            quizzesCompleted: 24,
            leaderboardRank: 2,
            totalScore: 980,
            achievements: 12,
        };

        res.status(200).json({ success: true, stats });
    } catch (error) {
        console.error("Error fetching user stats:", error);
        res.status(500).json({ success: false, message: "Failed to fetch user stats" });
    }
};

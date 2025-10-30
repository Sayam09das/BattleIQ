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

exports.getUserPerformance = async (req, res) => {
    try {
        const data = [
            { month: "Jan", score: 80, average: 70 },
            { month: "Feb", score: 85, average: 72 },
            { month: "Mar", score: 78, average: 75 },
            { month: "Apr", score: 90, average: 80 },
            { month: "May", score: 88, average: 82 },
        ];

        res.json({ success: true, data });
    } catch (err) {
        res.status(500).json({ success: false });
    }
};


exports.getUserSkills = async (req, res) => {
    try {
        const skills = [
            { subject: "Math", score: 85 },
            { subject: "Science", score: 92 },
            { subject: "History", score: 78 },
            { subject: "English", score: 88 },
            { subject: "Geography", score: 81 },
        ];

        res.status(200).json({
            success: true,
            data: skills
        });
    } catch (error) {
        console.error("Error fetching skill analysis:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch skills analysis"
        });
    }
};

exports.getWeeklyActivity = async (req, res) => {
    try {
        const data = [
            { day: "Mon", quizzes: 4 },
            { day: "Tue", quizzes: 3 },
            { day: "Wed", quizzes: 5 },
            { day: "Thu", quizzes: 2 },
            { day: "Fri", quizzes: 6 },
            { day: "Sat", quizzes: 7 },
            { day: "Sun", quizzes: 3 },
        ];

        res.status(200).json({ success: true, data });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to fetch weekly activity" });
    }
};

exports.getSubjectPerformance = async (req, res) => {
    try {
        const data = [
            { subject: "Math", score: 85 },
            { subject: "Science", score: 92 },
            { subject: "History", score: 78 },
            { subject: "English", score: 88 },
            { subject: "Geography", score: 81 },
        ];

        res.status(200).json({ success: true, data });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to fetch subject performance" });
    }
};


const express = require("express");
const router = express.Router();
const { getUserStats } = require("../controllers/userStatsController");
const { getUserPerformance } = require("../controllers/userStatsController");
const { getUserSkills } = require("../controllers/userStatsController");
const { getWeeklyActivity } = require("../controllers/userStatsController");
// const { getSubjectPerformance } = require("../controllers/userStatsController");
const { authenticateToken } = require('../middleware/authMiddleware');

// GET /api/user/stats
router.get("/stats", authenticateToken, getUserStats);
router.get("/performance", authenticateToken, getUserPerformance);
router.get("/skills-analysis", authenticateToken, getUserSkills);
router.get("/activity/weekly", authenticateToken, getWeeklyActivity);
// router.get("/activity/subject-performance", authenticateToken, getSubjectPerformance);

module.exports = router;

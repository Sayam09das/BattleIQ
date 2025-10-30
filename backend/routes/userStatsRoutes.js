const express = require("express");
const router = express.Router();
const { getUserStats } = require("../controllers/userStatsController");
const { getUserPerformance } = require("../controllers/userStatsController");
const { getUserSkills } = require("../controllers/userStatsController");
const { authenticateToken } = require('../middleware/authMiddleware');

// GET /api/user/stats
router.get("/stats", authenticateToken, getUserStats);
router.get("/performance", authenticateToken, getUserPerformance);
router.get("/skills-analysis", authenticateToken, getUserSkills);

module.exports = router;

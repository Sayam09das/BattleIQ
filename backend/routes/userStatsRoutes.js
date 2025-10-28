const express = require("express");
const router = express.Router();
const { getUserStats } = require("../controllers/userStatsController");
const { authenticateToken } = require('../middleware/authMiddleware');

// GET /api/user/stats
router.get("/stats", authenticateToken, getUserStats);

module.exports = router;

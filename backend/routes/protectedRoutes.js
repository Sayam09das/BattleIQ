const express = require('express');
const router = express.Router();

// ✅ Import authenticateToken with correct casing
const { authenticateToken } = require('../middleware/authMiddleware');

// Protected route example: only accessible to logged-in users
router.get('/battleiq', authenticateToken, (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Schedulo Task Manager!',
        user: req.user,       // contains decoded JWT info
        userId: req.userId,   // userId from token
    });
});

// You can add more protected routes below using authenticateToken
router.get('/dashboard', authenticateToken, (req, res) => {
    res.status(200).json({
        message: 'This is your dashboard',
        user: req.user,
    });
});

module.exports = router;

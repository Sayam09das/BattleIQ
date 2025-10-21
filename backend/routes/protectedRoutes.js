const express = require('express');
const router = express.Router();

const { authenticateToken } = require('../middleware/authmiddleware');

// ✅ Protected route: /schedulo (accessible to any logged-in user)
router.get('/battleiq', authenticateToken, (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Schedulo Task Manager!',
        user: req.user, // contains decoded JWT info
        userId: req.userId || 'N/A', // in case you need userId separately
    });
});

module.exports = router;
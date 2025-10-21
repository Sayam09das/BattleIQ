const jwt = require('jsonwebtoken');

exports.authenticateToken = (req, res, next) => {
    let token = req.cookies?.authToken;

    // Check Authorization header if token not in cookies
    if (!token && req.headers.authorization?.startsWith("Bearer ")) {
        token = req.headers.authorization.split(" ")[1];
    }

    if (!token) return res.status(401).json({ message: 'No token provided' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (err) {
        res.status(403).json({ message: 'Invalid token' });
    }
};

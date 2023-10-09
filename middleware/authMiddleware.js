// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // Get the JWT token from the request header
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Authentication failed. No token provided.' });
  }

  try {
    // Verify the token with your secret key
    const decoded = jwt.verify(token, 'your-secret-key');
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Authentication failed. Invalid token.' });
  }
};

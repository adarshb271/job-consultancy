const jwt = require('jsonwebtoken');
const Admin = require('../db/models/admin-schema');

module.exports.adminAuthMiddleware = async (req, res, next) => {
    try {
        // Extract the token from Authorization header
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'No token provided. Access denied.' });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.ADMIN || 'your_secret_key');

        // Find admin using the ID from the decoded token
        const admin = await Admin.findById(decoded.id);

        if (!admin) {
            return res.status(401).json({ message: 'Invalid token. Access denied.' });
        }

        // Attach the admin to the request object for later use
        req.admin = admin; 
        next();  // Continue to the next middleware or route handler
    } catch (error) {
        res.status(500).json({ message: 'Authentication failed.', error: error.message });
    }
};




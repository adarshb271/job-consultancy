const jwt = require('jsonwebtoken');
const User = require('../db/models/user-schema');

module.exports. authenticate = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ message: 'Authentication required' });
    }

    try {
        const decoded = jwt.verify(token, process.env.USERKEY);
        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        req.user = user; // Attach user to the request object
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token', error });
    }
};



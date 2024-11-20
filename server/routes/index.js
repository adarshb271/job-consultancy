const express = require('express');


const userRoutes = require('./user-routes');
const adminRoutes = require('./admin-routes');

const router = express.Router();

router.use('/admin',adminRoutes);
router.use('/user',userRoutes)

module.exports = router;

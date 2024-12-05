const express = require('express');


const userRoutes = require('./user-routes');
const adminRoutes = require('./admin-routes');
const jobRoutes= require('./job-routes')
const appliciationRoutes=require('./appilication-routes')
const employersRoutes = require('./employer-routes')



const router = express.Router();

router.use('/admin',adminRoutes);
router.use('/user',userRoutes)
router.use('/job',jobRoutes)
router.use('/application',appliciationRoutes)
router.use('/employer',employersRoutes)
module.exports = router;

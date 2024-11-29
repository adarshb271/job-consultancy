const express= require('express')
const controller = require('../controllers/jobscontroller')

// const { authenticate } = require('../middleware/userauth');
const router = express.Router();


router.get('/posted',controller. getPostedJobs);


module.exports=router
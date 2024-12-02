const express= require('express')
const controller = require('../controllers/employecontroller')
//  const { adminAuthMiddleware } = require('../middleware/adminauth')
const router = express.Router();

router.post('/postjob',controller.postJob)
router.get('/getjob', controller.getJobs);

module.exports=router
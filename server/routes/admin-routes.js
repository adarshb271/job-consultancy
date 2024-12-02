const express= require('express')
const controller = require('../controllers/admincontroller')
const { adminAuthMiddleware } = require('../middleware/adminauth')
const router = express.Router();

router.post('/signupadmin',controller.signupAdmin)
router.post('/loginadmin',controller.loginAdmin)
//  router.delete('/:id',controller.deletecandidate)

// router.post('/postjob',adminAuthMiddleware,controller.addNewJob)

module.exports=router
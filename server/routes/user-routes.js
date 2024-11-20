const express= require('express')
const controller = require('../controllers/usercontroller')
// const  usermiddleware  = require('../middleware/userauth')
const { authenticate } = require('../middleware/userauth');
const router = express.Router();

router.get('/',controller.getUser)
router.post('/signupuser',controller.signupUser)
router.post('/loginuser',controller.loginUser)

router.post('/jobs/:jobId/apply', authenticate,controller.applyForJob);
// router.post('/jobs/:jobId/apply', usermiddleware, applyForJob);
module.exports=router
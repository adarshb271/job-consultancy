const express= require('express')
const controller = require('../controllers/appilicationcontrollers')
const router = express.Router();
const upload = require('../middleware/upload');

router.post('/submit',upload.single('file'),controller.submitApplication)
router.get('/',controller.getApplication)
module.exports=router
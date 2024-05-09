const express=require('express')
const router=express.Router()
const studentController=require('../controllers/Student.Controller')

router.post('/createStudent',studentController.createStudent)
router.get('/',studentController.getStudent)

module.exports=router

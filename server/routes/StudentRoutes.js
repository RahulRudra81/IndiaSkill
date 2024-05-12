const express=require('express')
const router=express.Router()
const studentController=require('../controllers/Student.Controller')

router.post('/createStudent',studentController.createStudent)
router.get('/',studentController.getStudent)
router.get('/details/:id',studentController.studentDetail)
router.get('/getstudents/:id',studentController.studentFromClass)

module.exports=router

const express=require('express')
const router=express.Router()

const teacherController=require('../controllers/Teacher.Controller')

router.post('/createTeacher',teacherController.createTeacher)
router.get('/',teacherController.getTeacher)

module.exports=router
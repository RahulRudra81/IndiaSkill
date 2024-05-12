const express=require('express')
const router=express.Router()

const teacherController=require('../controllers/Teacher.Controller')

router.post('/createTeacher',teacherController.createTeacher)
router.get('/',teacherController.getTeacher)
router.get('/getTeacher/:id',teacherController.teacherFromClass)
router.get('/details/:id',teacherController.teacherDetail)

module.exports=router
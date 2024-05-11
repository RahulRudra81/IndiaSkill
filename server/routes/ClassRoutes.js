const express=require('express')
const router=express.Router()
const classController=require('../controllers/Class.Controller')

router.post('/createClass',classController.createClass)
router.get('/',classController.getClass)
router.get('/details/:id',classController.ClassDetails)

module.exports=router
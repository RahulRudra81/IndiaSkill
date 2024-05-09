const express=require("express")

const adminController=require('../controllers/Admin.Controller')
const router=express.Router()

router.post('/createadmin',adminController.createAdmin)
router.get('/',adminController.getAdmin)
module.exports=router


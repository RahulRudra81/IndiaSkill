const express=require("express")

const authService=require('../services/auth')
const router=express.Router()


router.post('/',authService.login)
module.exports=router


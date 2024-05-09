const express=require('express')


const {Admin} = require('../models/Admin')

const createAdmin=async (req,res)=>{
    try{

        const {name,email,password}=req.body
        const newAdmin=new Admin({name,email,password})
        await newAdmin.save()
        res.send("new Admin added")
    }catch(err){
        res.status(500).send(err);
        console.log(err)
    }

}
const getAdmin=async (req,res)=>{
    try{
        const admin=await Admin.find()
        res.send(admin)
    }catch(err){
        res.status(500).send(err)
    }
}

module.exports={createAdmin,getAdmin}
const express=require('express')


const { Teacher} = require('../models/Teachers')

const  createTeacher=async (req,res)=>{
    try{

        const {_id,name,age,email,password}=req.body
        const newTeacher=new Teacher({_id,name,age,email,password})
        await newTeacher.save()
        res.send("new teacher added")
    }catch(err){
        res.status(500).send(err);
        console.log(err)
    }

}
const getTeacher=async (req,res)=>{
    try{
        const teacher=await Teacher.find()
        res.send(teacher)
    }catch(err){
        res.status(500).send(err)
    }
}

module.exports={createTeacher,getTeacher}
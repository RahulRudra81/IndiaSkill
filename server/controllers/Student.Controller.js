const express=require('express')


const { Students} = require('../models/Student')

const  createStudent=async (req,res)=>{
    try{

        const {_id,name,age,email,password,grade}=req.body
        const newStudent=new Students({_id,name,age,email,password,grade})
        await newStudent.save()
        res.send("new Student added")
    }catch(err){
        res.status(500).send(err);
        console.log(err)
    }

}
const getStudent=async (req,res)=>{
    try{
        const student=await Students.find()
        res.send(student)
    }catch(err){
        res.status(500).send(err)
    }
}

module.exports={createStudent,getStudent}
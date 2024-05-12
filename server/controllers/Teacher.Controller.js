const express=require('express')

const {classes}=require('../models/Class')
const { Teacher} = require('../models/Teachers')

const  createTeacher=async (req,res)=>{
    try{
        
        const {name,age,email,password,grades}=req.body
        const gradeRefs=new Set()
        for(const grade of grades){
            const gradeRef=await classes.findOne({classNumber:grade.classNumber,section:grade.section})
            if(!gradeRef){ 
                res.status(404).send("No such class exist")
            }
            gradeRefs.add(gradeRef._id)
        }
        const uniqueGrade=[]
        for(const grade of gradeRefs){
            uniqueGrade.push(grade)
        }
        const newTeacher=new Teacher({name,age,email,password,grade:uniqueGrade})
        await newTeacher.save()

        for(const gradeid of gradeRefs){
            await classes.findByIdAndUpdate(gradeid, { $push: { teachers: newTeacher._id } });
        }
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
const teacherFromClass=async(req,res)=>{
    try{
        const classId=req.params
        const teacher=await Teacher.find({grade:classId.id})
        res.json(teacher)
    }catch(err){
        res.status(500).send(err)
    }
}

const teacherDetail=async(req,res)=>{
    try{
        const teacherId=req.params
        const details=await Teacher.find({_id:teacherId.id})
        res.send(details)
    }catch(err){
        res.status(500).send(err)
    }
}

module.exports={createTeacher,getTeacher,teacherFromClass,teacherDetail}
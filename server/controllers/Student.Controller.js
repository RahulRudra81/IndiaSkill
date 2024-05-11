const {classes}=require('../models/Class')
const { Students} = require('../models/Student')

const  createStudent=async (req,res)=>{
    try{
        const {name,age,email,password,grade,section}=req.body
        const gradeRef=await classes.findOne({classNumber:grade,section:section})
        if(!gradeRef){
            res.status(401).send("No such class exist")
        }
        const grade_id=gradeRef._id
        const newStudent=new Students({name,age,email,password, grade: grade_id})
        await newStudent.save()
        await classes.findByIdAndUpdate(gradeRef._id, { $push: { students: newStudent._id } });
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
const studentDetail=async (req,res)=>{
    try{
        const studentId=req.params
        const details=await Students.find({_id:studentId.id})
        res.send(details)
    }catch(err){
        res.status(500).send(err)
    }
}

module.exports={createStudent,getStudent,studentDetail}
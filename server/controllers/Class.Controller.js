const express=require('express')


const {classes} = require('../models/Class')

const createClass=async (req,res)=>{
    try{
        const {_id,teachers,students,classNumber,section}=req.body
        const newClass=new classes({_id,teachers,students,classNumber,section})
        await newClass.save()
        res.send("new class added")
    }catch(err){
        res.status(500).send(err);
        console.log(err)
    }

}
const getClass=async (req,res)=>{
    try{
        const gotClass=await classes.find()
        res.send(gotClass)
    }catch(err){
        res.status(500).send(err)
    }
}

module.exports={createClass,getClass}
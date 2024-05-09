const mongoose=require('mongoose')

const studentSchema=new mongoose.Schema({
    _id:{
        type:String,
        required:true,
        unique:true
    },
    name: {
        type:String,
        required: true
    },
    age : Number,
    email : {
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    taskProvided:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Task"
    },
    grade:{
        type:Number,
        required:true
    },
    class:{
        type:mongoose.Schema.ObjectId,
        ref:"Classes"
    }
})

const Students=mongoose.model("Student",studentSchema)
module.exports={Students}
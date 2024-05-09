const mongoose=require('mongoose')

const teacherSchema=new mongoose.Schema({
    _id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

const Teacher= mongoose.model("Teachers",teacherSchema)
module.exports={Teacher}
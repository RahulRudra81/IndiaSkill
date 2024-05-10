const mongoose=require('mongoose')

const teacherSchema=new mongoose.Schema({
    
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
    },
    grade:[{
        type:mongoose.Schema.ObjectId,
        ref:"Classes",
        required:true
    }],
    role:{
        type:String,
        default:"teacher"
    }
})

const Teacher= mongoose.model("Teachers",teacherSchema)
module.exports={Teacher}
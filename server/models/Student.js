const mongoose=require('mongoose')

const studentSchema=new mongoose.Schema({
    
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
        type:mongoose.Schema.ObjectId,
        ref:"Classes",
        required:true
    },
    role:{
        type:String,
        default:"student"
    }
})

const Students=mongoose.model("Student",studentSchema)
module.exports={Students}
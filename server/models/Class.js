const mongoose = require('mongoose')

const classSchema=new mongoose.Schema({
    _id:{
        type:String,
        requierd:true,
        unique:true
    },
    students:[{type:String,ref:"Students"}],
    teachers:[{type:String,ref:"Teachers"}],
    classNumber:{
        type:Number,
        required:true
    },
    section:{
        type:String,
        required:true
    }
})

const classes=mongoose.model("Classes",classSchema)
module.exports={classes}
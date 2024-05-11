const express = require('express')
const cors = require('cors');
const app=express()
app.use(cors());
app.use(express.json())
const adminRoutes=require('./routes/AdminRoutes')
const studentRoutes=require('./routes/StudentRoutes')
const teacherRoutes=require('./routes/TeacherRoutes')
const classRoutes=require('./routes/ClassRoutes')
const authRoute=require('./routes/AuthRoute')
const port=3001
require('dotenv').config()
const mongoose=require('mongoose')
const mongourl=process.env.mongourl
let connect=async()=>{
    try{
        await mongoose.connect(mongourl)
        console.log("connected to mongodb")
    }catch(err){
        console.log(err)
    }
}

app.get('/',(req,res)=>{
    res.send("Hello")

})

app.use('/admin',adminRoutes)
app.use('/student',studentRoutes)
app.use('/teacher',teacherRoutes)
app.use('/class',classRoutes)
app.use('/auth',authRoute)

app.listen(port,()=>{
    connect()
    console.log(`Server Listening on port ${port}`)
})
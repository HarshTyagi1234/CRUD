const express=require('express')
const connect=require('./connection')
const student=require('./routes/student.js')
const app=express();
app.use(student)
connect();


app.listen(3005,(error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("server is running..........");
    }
})
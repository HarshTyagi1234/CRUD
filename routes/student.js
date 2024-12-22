const express=require('express');
const router=express.Router()
const studentcontroller=require('../controller/logic.js')
router.use(express.json())

router.post('/student/create',(req,res)=>{
    studentcontroller.createstudent(req,res);
})

router.get('/student',(req,res)=>{
    studentcontroller.getstudent(req,res);
})
router.get('/student/:rollno',(req,res)=>{
    studentcontroller.getstudent(req,res);
})

module.exports=router;
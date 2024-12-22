const student=require('../model/table.js')
const createstudent =async(req,res)=>{
    try{
        console.log("req.body");
        let student=new student(req.body);
        student=await student.save();
        res.json({message:'Student craeted sucessfully',student}
)    }
    catch(err){
        res.status(500).json({message:'error creating student',error:err});
    }
};

const getstudent =async(req,res)=>{
    try{
       
        let student=await student.find({});
        console.log(student);
         res.json(student)
    }
    catch(err){
        console.log(err);
    }
    

}

const getst =async(req,res)=>{
    try{
        
        let rollNo= req.params.rollNo;
        let student=await student.findOne({rollNo:rollNo});
        console.log(student);
         res.json(student)
    }
    catch(err){
        console.log(err);
    }
    

}
module.exports={
    createstudent,getstudent,getst
}
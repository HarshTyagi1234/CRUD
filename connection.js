const mongoose=require('mongoose')
const connect=async()=>{
    try{
        let connection=await mongoose.connect('mongodb://localhost:27017/noderd',{useNewUrlParser:true})
          console.log('database connected..');
    }catch(error){
        console.log(error);
    }
}
module.exports=connect;
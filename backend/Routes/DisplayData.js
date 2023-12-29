const express=require('express')
const router=express.Router()

router.post('/doctorData',(req,res)=>{
    try{
       // console.log(global.doctorData2,global.doctorCategory)
           res.send([global.doctors,global.doctorCategory]);
    }

    catch(error){
           console.error(error.message)
           res.send("server error")
    }
})

module.exports=router;
const express=require('express')
const router=express.Router()
const User=require('../models/User') //we need User.js here ie. the schema 
const { body, validationResult } = require('express-validator');

const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");      //for encrypting password
const jwtSecret="MynameisHeltoHelYouTubeChannel$#"   //this is for authtoken
router.post("/createuser",
[body('email').isEmail(),
// password must be at least 5 chars long
body('name').isLength({ min : 4 }),
body('password','incorrect password').isLength({ min : 4 })],
//
body('contact').isNumeric(),
 async(req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }


const salt=await bcrypt.genSalt(10);                  //encrypting password
let secPassword=await bcrypt.hash(req.body.password,salt)





    try{                                               //we r using try catch instea of if else
   await User.create({
            // name:"iram",
            // password:"123456",
            // email:"iram25484@gmail.com",
            // contact:9149281571,
            // location:"hshshsh" 

            
            name:req.body.name, 
            email:req.body.email,
          contact:req.body.contact,       
      //instead of password:req.body.password, since we have encrypted the password so it will be liek:
       password:secPassword,
            
           
            
            // location:req.body.location 
        }).then(res.json({success:true}));  

                  // since it is a (req,res) therfore we send response in json type that is user is made js give response as true else false
    }     catch(error){
        console.log(error)
        res.json({success:false});

    }
})

//dont forget to change path /loginuser 
router.post("/loginuser", [
    body('email').isEmail(),

body('password','incorrect password').isLength({ min : 4 })],


 async(req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }   

let email=req.body.email;
    try{                                             
  let userData= await User.findOne({email});  
if(!userData)  //if email is not found in database we will return bad request
{
    return res.status(400).json({ errors: "try logging in with correct email" });
}

//now we will bcrypt will automatically compare the hash with password and return true is it matches
const pwdCompare=await bcrypt.compare(req.body.password,userData.password) //since we stored the data in userData

//instead of below
//if(req.body.password!==userdata.password)
//we can write 
if(!pwdCompare)  //which says is password does match

{
    return res.status(400).json({ errors: "try logging in with correct password" });
}

const data={
   user:{
         id:userData.id
   }
}
const authToken=jwt.sign(data,jwtSecret)
res.json({success: true,authToken:authToken});   // this is the else part of abve two if


                  // since it is a (req,res) therfore we send response in json type that is user is made js give response as true else false
    }     catch(error){
        console.log(error)
        res.json({success:false});

    }
})



module.exports=router;    //bcz we are exporting router see above

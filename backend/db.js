const mongoose = require('mongoose');
const mongoURI='mongodb://21051221:2jiqoTYccnhO9sve@ac-x0u4ujd-shard-00-00.bfwez7z.mongodb.net:27017,ac-x0u4ujd-shard-00-01.bfwez7z.mongodb.net:27017,ac-x0u4ujd-shard-00-02.bfwez7z.mongodb.net:27017/gentleassist?ssl=true&replicaSet=atlas-la3jgc-shard-0&authSource=admin&retryWrites=true&w=majority'
mongoose.set('strictQuery', true);      //this is just to remove a slight error 


const mongoDB=async()=>{ 
   await mongoose.connect(mongoURI,{useNewUrlParser: true}, async (err,result)=>{
    if(err)
    console.log("---",err)
else
{console.log("connected");
const fetched_data=await mongoose.connection.db.collection("doctors");
fetched_data.find({}).toArray(async function(err,data){

const doctorCategory=await mongoose.connection.db.collection("doctorCategory");
doctorCategory.find({}).toArray(function (err,catData){
    if(err){
           console.log(err);
        }

          else{
      global.doctors=data;
      global.doctorCategory=catData;
      console.log(global.doctors);
      console.log(global.doctorCategory);
        }
})
    //  if(err){
    //   console.log(err);
    // }
    
    // else{
    //     global.doctorData2=data;
    //   //  console.log(global.doctorData2);
    // }
})

}
});
}
module.exports=mongoDB;
//This is my entry point file!

//import express 
const express = require("express");
const DB = require("./FakeDB.js");


//create the Express app object

const app = express();
const PORT = 3000;

//routes  (Handle Incoming HTTP Request (ALL FOUR TYPE(GET, POST , PUT , DELETE)))

//localhost:3000/avengers - GET

//THIS MEANS  :GIVE ME ALL AVENGERS
app.get("/avengers",(req,res)=>{

   res.json({
       message: "A list of all the avengers",
       data: DB.avengers,
       totalAvengersCount : DB.avengers.length
   })

});

//THIS MEANS  : GIVE ME A SPECIFIC AVENGERS BASED ON THE ID PROVIDED
//localhost/avengers/2
app.get("/avengers/:id",(req,res)=>{

    
    res.json({
        message: `Avenger with the id ${req.params.id}`,
        data : DB.getAvenger(parseInt(req.params.id))

    })
    
});


//THIS MEANS  : CREATE A AVENGERS
app.post("/avengers",(req,res)=>{

    
    
});


//THIS MEANS  : UPDATAE A SPECIFIC AVENGERS BASED ON THE ID PROVIDED
app.put("/avengers/:id",(req,res)=>{
    
});

//THIS MEANS  : DELETE A SPECIFIC AVENGERS BASED ON THE ID PROVIDED
app.delete("/avengers/:id",(req,res)=>{
    
});

app.listen(PORT,()=>{

    console.log(`The REST API is up and running on PORT ${PORT}`);
})
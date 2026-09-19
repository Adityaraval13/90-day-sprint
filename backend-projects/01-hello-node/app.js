const express = require ('express');
const app = express() ;

//When someone visits the home route  , send this response 

app.get('/' , (req , res) =>{
    res.send("My server is officially listening ! ");
});

//Tell the server to stay awake and listen to port 3000 
app.listen(3000 , () =>{
    console.log("Server running on https://localhost:3000");
});



app.get('/api/profile',(req , res ) =>{
    res.json({
        name:"Aditya",
        role:"Software Developer",
        sprintDay:1,
        status:"Building my first API"
    });
});
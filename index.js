const express=require('express');

const app=express();

app.get('/cancel',(req,res)=>{
    res.send("Payment is failed")
})

app.listen(4000,(req,res)=>{
    console.log("Server is running")
})
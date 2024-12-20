const express=require("express");//this imports express framework
const app=express();// creates an express application. more like a server is created here

app.get("/",(req,res)=>{
    res.send("Hello World!")// responds to homepase request
})

const PORT=3000; //defines the port where 
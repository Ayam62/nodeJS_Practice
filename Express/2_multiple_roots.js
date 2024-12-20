const express=require("express")

const app=express();


app.get("/",(req,res)=>{
    res.send("Welcome to my web page")
})

app.get("/about",(req,res)=>{
    res.send("Welcome to my about page")
})

app.get("/contact",(req,res)=>{
    res.send("contact me at ayam62@gmail.com")
})
//catch all routes for undefined pathss
app.get("*",(req,res)=>{
    res.send("404 not found");
})
app.listen(300,(req,res)=>{
    console.log("Server is running at port 300");
})
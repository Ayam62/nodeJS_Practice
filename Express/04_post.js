const express=require("express")

const app=express();
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.post("/submit",(req,res)=>{
    const {name,age}=req.body//retrieve name and body from the request
    if(name && age){
        res.send(`Hello ${name}. You are ${age} years old`);
    }
    else{
        res.send("Please enter name and age ");
    }
})

app.post("/register",(req,res)=>{
    const {status,message}=req.body;
    if(status && message){
        res.send(`Your response is registered on ${status} status and ${message}`)

    }
    else{
        res.send("haha you are noob")
    }
})

app.get("*",(req,res)=>{
    res.status(400).send("Error 404 not found");
})

const port = 3021; // Ensure this matches
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));

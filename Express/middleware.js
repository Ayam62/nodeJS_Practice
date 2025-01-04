const express=require("express");
const app=express();

app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}-${new Date().toISOString()}`);//shows what is happening before get request when just like a cctv camera inside a home to track every actions
    next();//passes control to nexxt middleware(next camera) or route handler
})


app.use(express.json());//parse JSON i.e converts json into object..also it makes that contents ready for req.body

let users=[
    {id:1,
     name:"Ayam",
     age:30
    },
    {id:2,
     name:"Aryan",
     age:13,
    }
];

app.get("/users",(req,res)=>{
    res.json(users);
})

app.post("/users",(req,res)=>{
    const {name,age}=req.body;//get name and age from the post request
    console.log(name,age,req.body);
    if(name && age){
        const newUser={
            id:users.length+1,
            name,
            age
        };//creates new user

        users.push(newUser)//add new user to the array

        res.status(201).json({
            status:"success",
            message:"User added successfully",
            user:newUser
        });
    }
    else{
        res.status(400).json({
            status:"error",
            message:"please provide both name and age"
        })
    }
})


app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).send("Something broke!");
})

app.listen(3000,()=>{
    console.log("server is running on http://localhost:3000")
})


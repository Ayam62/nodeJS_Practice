//import "dotenv/config";

const express = require("express");
// require("dotenv").config();



const app = express();

const port=process.env.PORT  || 3000;

app.use(express.json());

let users = [
    {
        id: 1,
        name: "Ayam",
        age: 19
    },
    {
        id: 2,  // Corrected: Unique ID
        name: "Aryan",
        age: 13
    },
];

app.get("/", (req, res) => {
    res.send("Hey, Welcome to my home page");
});

app.get("/users", (req, res) => {
    res.json(users);
});

//update id

app.put("/users/:id",(req,res)=>{
    const userId=parseInt(req.params.id);//received id from the request which needs to be updated

    const{name,age}=req.body;//extract name and age from the body 

    const user=users.find(u=>u.id===userId);//find user by Id

    if(user){//user object is found
        if(name) user.name=name;//user enters name from put request in the id given by user in the url
        if(age) user.age=age;

        res.json(
            {
                status:"success",
                message:"User updated succesfully",
                updatedUser:user,
            }
        )
    }
    else{
        res.send("User not found")
    }
})//user is updated

app.delete("/users/:id",(req,res)=>{
    const deleteId=parseInt(req.params.id);
    users.find(u=>u.id===deleteId);

    if(deleteId!=-1){
        const deletedUser=users.splice(deleteId,1);
        res.json(
            {
                status:"success",
                message:"id deleted",
                updatedUser:deletedUser
            }
        )
    }
    else{
        res.status(404).json({
            status:"error",
            message:"user not found",
        });
    }
})






app.get("*", (req, res) => {
    res.status(404).send("404 not found");
});



app.listen(port, () => {
    console.log("Server is running on port 3002");
});

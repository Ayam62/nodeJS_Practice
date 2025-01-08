import express from "express";
import mongoose from "mongoose";
const app = express();
import Employee from "./models/employee.js";

//connection to mongodb
mongoose.connect("mongodb+srv://ayam:ayam@cluster0.xdvx3nz.mongodb.net/")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));


const port = 3000;

//connection to my ejs/html
app.set("view engine", "ejs");

//rendering html/ejs for ui
app.get("/", (req, res) => {
  res.render("index");
});

//in generate route do the following. note down that it is an async funciton because we have to create database so..
app.get("/generate", async (req, res) => {

  //generate random data inside the loop
  const names=["Ayam","Asmit","Sujal","Dipin","Utsab"]
  const salary=[45000, 78000, 62000, 33000, 97000]
  const language=["Python", "JavaScript", "Go", "Ruby", "C++"]
  const cities = ["Kathmandu", "Pokhara", "Biratnagar", "Damak", "Chitwan"];
  const isManager=[true,false,true,false,true]

  const random=Math.floor(Math.random()*5)

  for (let index = 0; index < 10; index++) {
    let e =await Employee.create({
      name: names[random],
      salary: salary[random],
      language: language[random],
      city: cities[random],
      isManager: isManager[random],
    });
    
  }
  res.render("index");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

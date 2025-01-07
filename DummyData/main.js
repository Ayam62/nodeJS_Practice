import express from "express";
import mongoose from "mongoose";
const app = express();
import Employee from "./models/employee.js";

mongoose.connect("mongodb://127.0.0.1:27017/test");

const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/generate", async (req, res) => {
  //generate random data
  for (let index = 0; index < 10; index++) {
    let e =await Employee.create({
      name: "Ayam",
      salary: 345,
      language: "Python",
      city: "damak",
      isManager: true,
    });
    console.log(e)
  }
  res.render("index");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

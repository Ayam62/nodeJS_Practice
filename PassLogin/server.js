const express = require('express')
const bcrypt=require("bcrypt")
const passport=require("passport")

const initializePassport=require("./passport.config.js")
initializePassport(passport,email=>{
    return users.find(user=>user.email===email)
})

const app = express()
const port = 3000

const users=[]
app.use(express.urlencoded({ extended: true }));

app.set("view-engine","ejs")

app.get('/', (req, res) => {
  res.render('index.ejs')
}) 

app.get('/register', (req, res) => {
  res.render('register.ejs')
}) 
app.get("/login",(req,res)=>{
    res.render('login.ejs')
})

app.post("/register",async(req,res)=>{
    //req.body.name   //that name is for the input in html(name)
    try {
        const hashedPass=await bcrypt.hash(req.body.password,10)
        users.push({
            id:Date.now().toString(),
            name:req.body.name,
            email:req.body.email,
            password:hashedPass
        })
        res.redirect("/login")//so that they can sign up after registering
    } catch (error) {
        res.redirect("/login")
    }
    console.log(users)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
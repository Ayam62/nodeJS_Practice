

import express from "express"
import mongoose from "mongoose"
const app = express()
await mongoose.connect('mongodb://127.0.0.1:27017/test');

const port = 3000

app.set("view engine","ejs")

app.get('/', (req, res) => {
  res.render("index")
})
app.get('/generate', (req, res) => {
    //generate random data
  res.render("index")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
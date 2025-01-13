const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const port = 3000

const app = express()
app.use(cors())
app.use(express.json())


const TodoModel=require("./Models/Todo.js")

mongoose.connect("mongodb+srv://ayam:ayam@cluster0.xdvx3nz.mongodb.net/test1")


app.get('/get', (req, res) => {
  TodoModel.find()
  .then(result=>res.json(result))
  .catch(err=>res.json(err))
})

app.post("/add",(req,res)=>{
    console.log("Request body:", req.body);
    const task=req.body.task
    console.log(task)
    TodoModel.create({
        task:task
    })
    .then(result=>res.json(result))
    .catch(err=>res.json(err))

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
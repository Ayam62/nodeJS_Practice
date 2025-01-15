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
    // console.log("Request body:", req.body);
    const task=req.body.task
    // console.log(task)
    TodoModel.create({
        task:task,
    })
    .then(result=>res.json(result))
    .catch(err=>res.json(err))

})

app.put("/update/:id",(req,res)=>{
    const {id}=req.params//always use params to extract id..more specifically  when retreiving any data from url itself after colon
    TodoModel.findByIdAndUpdate({_id:id},{isCompleted:true})//if this id matches with database's id then update isCompleted to true
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})
app.delete("/delete/:id",(req,res)=>{
    const {id}=req.params//always use params to extract id..more specifically  when retreiving any data from url itself after colon
    TodoModel.findByIdAndDelete({_id:id})//if this id matches with database's id then update isCompleted to true
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
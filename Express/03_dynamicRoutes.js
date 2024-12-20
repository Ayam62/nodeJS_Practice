const express =require("express")

const app=express();

app.get("/",(req,res)=>{
    res.send("Welcome welcome to my homepage")
})
app.get("/user/:name",(req,res)=>{
    const userName=req.params.name//extracts name from the request
    res.send(`welcome ${userName}`);
})
app.get("/calculate/:n1/:n2",(req,res)=>{
    const n1=parseInt(req.params.n1)
    const n2=parseInt(req.params.n2)
    const sum=n1+n2;
    const diff=n1-n2;
    const mul=n1*n2;
    const div=n1/n2;
    const calc={
        sum,
        diff,
        mul,
        div
    }

    res.send(calc);
})

app.get("/product/:id",(req,res)=>{
    const id=req.params.id;
    const json={
        "id":id,
        "name":"example id",
        "price":"10$",
    }
    res.send(json);
})
app.get("*",(req,res)=>{
    res.send("404 not found")
})

app.listen(300,(req,res)=>{
    console.log("Server is listening at port ");
})

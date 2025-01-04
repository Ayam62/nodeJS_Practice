const http=require("http");// http module
const fs=require("fs");//file system module

const server=http.createServer((req,res)=>{
    if(req.url==="/" && req.method==="GET"){
        fs.readFile("index.html",(err,data)=>{
            if(err){
                res.writeHead(500,{"Content-Type":"text/plain"});
                res.end("Internal Server Error");
            }
            else{
                //send the html content
                res.writeHead(200,{"Content-Type":"text/html"});
                res.end(data);
            }
        })
    }
    else{
        res.writeHead(404,{"Content-Type":"text/plain"});
        res.end("Page Not End");
    }
})


server.listen(400,()=>{
    console.log("Server is running...")
})


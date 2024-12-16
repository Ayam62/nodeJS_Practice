const http=require("http");

const server=http.createServer((req,res)=>{
    if(req.url.startsWith("/user/")){
        const userId=req.url.split("/")[2];//extracts userId from url
        res.writeHead(200,{"content-type":"text/plain"});
        res.end(`userId=${userId}`);
        
    }
    else{
         res.writeHead(200,{"content-type":"text/plain"});
         res.end("Hello,World");   
    }
})

server.listen(3002,()=>{
    console.log("Server is running at http://localhost:3002");
})
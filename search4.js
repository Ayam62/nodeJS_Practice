const http=require("http");

const server=http.createServer((req,res)=>{
    if(req.url.startsWith("/search")){
        const url=new URL(req.url,`http://${req.headers.host}`)
       const query= url.searchParams.get("q")


        res.writeHead(200,{"content-type":"text/plain"});
        res.end(`search=${query}`);
        
    }
    else{
         res.writeHead(200,{"content-type":"text/plain"});
         res.end("Hello,World");   
    }
})

server.listen(3002,()=>{
    console.log("Server is running at http://localhost:3002");
})
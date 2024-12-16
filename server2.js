const http=require("http");//import the bult in "http" module which provides functionality to create HTTP server and make HTTP requests.

const server=http.createServer((req,res)=>{ //this actually creates server adding req and response functionality to any web request.
     res.writeHead(200,{"Content-type":"text/plain"});// means content of the respons will me plain text.
     res.end("Hello World");
});

server.listen(3001,()=>{
    console.log("Server is running")
})




//req contains requests like GET,POST,URL and headers










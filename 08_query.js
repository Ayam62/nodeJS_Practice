const http =require("http");
const url=require("url");


//query is a key value pair in a url for eg.(http://example.com/search?q=nodejs&category=webdev)...here key =q,category and value = node and webdev

const server=http.createServer((req,res)=>{
    const parsedUrl=url.parse(req.url,true);// true parse query from string into an object 
    const query=parsedUrl.query;//query is an object which holds key value pair

    if(req.method==="GET" && req.url.startsWith("/greet")){

        const name=query.name || "Guest" //default =guest if name not provided

        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(`<h1>Hello, ${name}</h1>`);
    }
    else{
        res.writeHead(404,{"Content-Type":"text/plain"});
        res.end("Page Not Found");
    }

})

server.listen(1000,()=>{
    console.log("Server is running in port. http://localhost:1000")
})
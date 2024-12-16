const http=require("http")
const fs=require("fs")
const path=require("path")//enables working with file

const server=http.createServer((req,res)=>{

    //defile public directory
    const publicDir=path.join(__dirname);//means i am inside my 07_static file.


    //set the file path based on the request url
    const filePath=req.url==="/"? path.join(publicDir,"index.html"):path.join(publicDir,req.url);
    console.log(filePath);
    // Determine the content type based on the file extension
    const ext=path.extname(filePath);
    let contentType="text/html";

    switch(ext){
        case '.css':
            contentType="text/css";
            break;
        case '.jpg':
            contentType="image/jpeg";
            break;
        case '.png':
            contentType="image/png";
            break;
        case '.js':
            contentType="text/javascript";
            break;
    }

    // serve the file if exists

    fs.readFile(filePath,(err,content)=>{//calls the  assigned path to read the contents
        if(err){
            if(err.code==="ENOENT"){
                //code for file not found. this heps to distinguish it from other types of error
                res.writeHead(404,{"content-type":"text/plain"});
                res.end("404.File not found. ali majale khoj")
            }
            else{
                //serve file if found
                res.writeHead(200,{"content-type":contentType});
                res.end(content);
            }
        }
    })


})

server.listen(3001,()=>{
    console.log( "server is running...............");
 })
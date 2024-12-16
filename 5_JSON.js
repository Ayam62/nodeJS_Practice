const http=require("http");//used for http request
const fs=require("fs");//used to read and write files directly on the server

const server=http.createServer((req,res)=>{

    //Handling POST request with JSON data
    if(req.method==="POST" && req.url==="/submit"){
        let body="";//variable to store incoming data.

        //collect data chunks(small part of incoming data ) from file
        req.on("data",chunk=>{//takes chunks from file
            body+=chunk.toString(); //converts buffer/chunks from (binary) to string
         })

         req.on("end",()=>{//event listener to listen that data has been fully received
            //end indicates no more data will be sent from request stream
            try{
                const jsonData=JSON.parse(body);
                res.writeHead(200,{"Codntent-type":"application/json"});
                res.end(JSON.stringify({message:"Data received",data:jsonData}));
            }
            catch(error){
                res.writeHead(400,{"content-type":"text/plain"});
                res.end("INVADID JSON")
            }
         })
        
    }else{
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("Hello World");
    }
})

server.listen(3008,()=>{
    console.log("Server is running at port 3008")
})
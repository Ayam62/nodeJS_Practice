const express = require('express')
const app = express()
const port =process.env.PORT || 5001
const cors=require("cors")

//middlewares to connect with  frontend
app.use(cors())
app.use(express.json())//this allows backend to access frontend data(req.body)

app.get('/', (req, res) => {
  res.send('Hello World!')
})


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ayam:ayam@cluster0.xdvx3nz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    //create a collection for the database

    const books=client.db("BookInventory").collection("books")
    app.post("/upload-book",async(req,res)=>{
      const data=req.body
      const result =await bookCollection.insertOne(data)

    })

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
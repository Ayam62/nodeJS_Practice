const express = require('express');
const app = express();
const port = process.env.PORT || 5001;
const cors = require("cors");

//middlewares to connect with frontend
app.use(cors());
app.use(express.json()); //this allows backend to access frontend data(req.body)

app.get('/', (req, res) => {
  res.send('Hello World!');
});

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
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Create a collection for the database
    const books = client.db("BookInventory").collection("books");

    // POST route to upload book data
    app.post("/upload-book", async (req, res) => {
      const data = req.body;
      const result = await books.insertOne(data); // Use `books` instead of `bookCollection`
      res.send(result);
    });
    //get books from db
    app.get("/all-books",async(req,res)=>{
      const allBooks= books.find();
      const result =await allBooks.toArray()
      res.send(result)
    })
    //update books(use patch)
    // app.patch("/book/:id",async(req,res)=>{
    //   const id=req.params.id
    //   console.log(id)
    //   const updateData=req.body
    //   const filter={_id:new ObjectId(id)}
    //   const options={upsert:true}
    // })

    app.delete("/book/:id",async(req,res)=>{
      const id=req.params.id
      const filter={_id:new ObjectId(id)}
      const result = await books.deleteOne(filter);
      res.send(result) 
    })








    // Ping the database to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

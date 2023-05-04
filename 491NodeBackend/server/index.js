const express = require("express");
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const PORT = process.env.PORT || 3001;
const app = express();
const uri = "mongodb+srv://CECS491:12345@studease.gfzetdu.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.use(cors({
    origin: 'http://localhost:3000'
}));

const doc = {};

async function write(doc){
  let result
    try {
        await client.connect();
        
        let db = await client.db("StudEase_Class");
        let coll = db.collection("Classes");

        result = await coll.insertOne(doc);
    } finally {
        await client.close();
    }
    return result
}

async function read() {
  let list = [];
  try {
    await client.connect();

    let db = await client.db("StudEase_Class");
    let coll = db.collection("Classes");
  
    const cursor = coll.find();
    for await (const doc of cursor) {
      list.push(doc);
    }
    } finally {
      await client.close();
    }
    return list;
}

async function del() {
    let result;
    try {
        await client.connect();

        let db = client.db("StudEase_Class");
        let coll = db.collection("Classes");

        result = await coll.deleteMany(doc);
    } finally {
        await client.close();
    }
    return result.deletedCount;
}

app.post("/api", async (req, res) => {
  data = await write(req.query);
  res.json(data);
})

app.delete("/api", async (req, res) => {
  data = await del(doc);
  res.json(data);
})

app.get("/api", async (req, res) => {
  data = await read();
  res.json(data);
});

app.listen(PORT, () => {
   console.log(`Server listening on ${PORT}`);
 });

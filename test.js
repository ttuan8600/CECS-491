import { MongoClient, ServerApiVersion } from 'mongodb'
const uri = "mongodb+srv://CECS491:12345@studease.gfzetdu.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const doc = {}

async function write(docs){
    try {
        await client.connect();

        let db = await client.db("StudEase_Class");
        let coll = db.collection("Classes");

        const result = await coll.insertMany(docs);
        console.log(result)
    } finally {
        await client.close();
    }
}

async function read() {
    try {
        await client.connect();

        let db = await client.db("StudEase_Class");
        let coll = db.collection("Classes");

        const cursor = coll.find();
        await cursor.forEach(console.log);
    } finally {
        await client.close();
    }
}

async function del() {
    try {
        await client.connect();

        let db = await client.db("StudEase_Class");
        let coll = db.collection("Classes");

        const result = await coll.deleteMany(doc)
        console.log(result)
    } finally {
        await client.close();
    }
}

export {read, write, del}
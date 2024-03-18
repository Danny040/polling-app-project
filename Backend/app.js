const express = require("express");
const app = express();
const cors = require("cors");
const port = 4000; 

let corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

app.use(express.json());
app.use(cors(corsOptions));

const { MongoClient, ServerApiVersion } = require("mongodb");
const ObjectID = require("mongodb").ObjectId;

const dbUser = encodeURIComponent('Dan');
const dbPassword = encodeURIComponent('XytrNdrKYjUAP7t7');
const dbCluster = 'polling-app.zjsg7bf.mongodb.net';

const uri = `mongodb+srv://${dbUser}:${dbPassword}@${dbCluster}/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

let myDb;

app.get("/", (req, res) => {
    res.send("I love the universe!");
});

async function run() {
    try {
        await client.connect();
        myDb = client.db("App");
        console.log("Pinged your deployment. You successefully connected to MongoDB!");
    } 
    catch (err) {
      console.log(err);
    }
}

run().catch((error) => console.log(error));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


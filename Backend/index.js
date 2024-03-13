const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const port = 4000; 

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

let corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

let myDb;

async function run() {
    try {
        await client.connect();
        myDb = client.db("App");
        console.log("Pinged your deployment. You successefully connected to MongoDB!");
        app.listen(port, () => {
          console.log(`Server running at http://localhost:${port}`);
      });
    } 
    catch (err) {
      console.log(err);
    }
    // finally {
    //     console.log("connection is closed.");
    //     await client.close();
    // }
}

run().catch((error) => console.log(error));

app.use(cors(corsOptions));
app.use(express.json());

app.get('/aboutMe', (req, res) => {
  res.send("I'm a sweet boy with a big...\nPocket");
});

app.get('/', (req, res) => {
    res.send("Fuck the world, I love the universe!");
});
  
app.post('/users', async (req, res) => {
  try {
    let myColl = myDb.collection("Users");
    const user = req.body;
    const result = await myColl.insertOne(user);
    res.status(200).json(result);
    console.log(result.insertedId);
  } catch (err) {
    console.log(err);
    res.status(500).json({message: err.message});
  }
});

app.get('/users', async (req, res) => {
  try {
    let myColl = myDb.collection("Users");
    const users = await myColl.find({email: "name@email.com"}).toArray();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

app.put('/user/:id', async (req, res) => {
  try {
    const {id} = req.params;
    let myColl = myDb.collection("Users");
    const result = await myColl.updateOne({_id: new ObjectID (id)}, {$set: req.body});
    if (!result) {
      return res.status(404).json({message: `a user with ID ${id} cannot be found.`});
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

app.delete('/user/:id', async (req, res) => {
  try {
    const {id} = req.params;
    let myColl = myDb.collection("Users");
    const result = await myColl.deleteOne({_id: new ObjectID(id)});
    if (!result) {
      return res.status(404).json({message: `a user with ID ${id} cannot be found.`});
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
    
});
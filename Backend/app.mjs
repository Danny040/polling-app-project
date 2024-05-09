import express from "express";
import authRouts from './auth.mjs';
import cors from "cors";
import dotenv from 'dotenv';
import pkg from "mongodb";
import admin_f from './admin_f.mjs';


const app = express();
dotenv.config();

const URI = process.env.ATLAS_URI;
const port = process.env.PORT;



let corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

app.use(express.json());
app.use(cors(corsOptions));
app.use('/auth', authRouts);
app.use('/adminf', admin_f);


const { MongoClient, ServerApiVersion } = pkg;
const { ObjectID } = pkg;


const client = new MongoClient(URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

export let myDb;

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

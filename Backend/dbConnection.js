const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://Dan:XytrNdrKYjUAP7t7@polling-app.zjsg7bf.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        await client.db("admin").command({ping: 1});
        console.log("Pinged your deployment. You successefully connected to MongoDB!");
    } finally {
        await client.close();
    }
}

run().catch(console.dir);
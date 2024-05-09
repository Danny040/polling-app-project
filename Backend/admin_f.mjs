import express from"express";
import { myDb } from "./app.mjs";
import { ObjectId }from "mongodb";

const router = express.Router();



router.delete('/delete-user/:id', async (req, res) => {
    try {
            const {id} = req.params;
            let myColl = myDb.collection("Users");
            const result = await myColl.deleteOne({_id: new ObjectId(id)});
            if (!result) {
              return res.status(404).json({message: `a user with ID ${id} cannot be found.`});
            }
            res.status(200).json(result);
          } catch (error) {
            res.status(500).json({message: error.message});
          }
});

router.get('/users', async (req, res) => {
    try {
        const myColl = await myDb.collection("Users");
        const users = await myColl.find({}).toArray();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

export default router;
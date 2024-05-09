import express from"express";
import { myDb } from "./app.mjs";

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
      const {email, password} = req.body;
      let usersCol = await myDb.collection("Users");
      let adminCol = await myDb.collection("Admin")
      // check if user already exists
      const existingUser1 = await usersCol.find({email: email}).toArray();
      const existingUser2 = await adminCol.find({email: email}).toArray();
      if (existingUser1.length > 0 || existingUser2.length > 0) {
        return res.status(400).json({message: "This user already exists."});
      }

      const newUser = {
        email: email,
        password: password,
        polls: [],
        verified: false,
        emailToken: ""
      }

      const result = await usersCol.insertOne(newUser);
      res.status(200).json(result);
      
      console.log(result.insertedId);
    } catch (err) {
      console.log(err);
      res.status(500).json({message: err.message});
    }
  });

router.post('/login', async (req, res) => {
  try {
    const {email, password} = req.body;
    let usersCol = await myDb.collection("Users");
    let adminCol = await myDb.collection("Admins");
    let user = await usersCol.find({email: email}).toArray();
    let whoLogIn = "user";
    if (user.length == 0) {
      user = await adminCol.find({email: email}).toArray();
      whoLogIn = "admin";
      if (user.length == 0) return res.status(401).json({message: "This user doesn't exist."});
    } 

    if (password != user[0].password) {
      return res.status(402).json({message: "Invalid credentials."});
    }

    res.status(201).json({message: user[0]._id, user: `${whoLogIn}`});
  } catch (error) {
    console.log(error);
    res.status(500).json({message: error.message});
  }
})
  
  // app.get('/users', async (req, res) => {
  //   try {
  //     const user = req.body;
  //     let myColl = myDb.collection("Users");
  //     const users = await myColl.find({email: "name@email.com"}).toArray();
  //     res.status(200).json(users);
  //   } catch (error) {
  //     res.status(500).json({message: error.message});
  //   }
  // });
  
  // app.put('/user/:id', async (req, res) => {
  //   try {
  //     const {id} = req.params;
  //     let myColl = myDb.collection("Users");
  //     const result = await myColl.updateOne({_id: new ObjectID (id)}, {$set: req.body});
  //     if (!result) {
  //       return res.status(404).json({message: `a user with ID ${id} cannot be found.`});
  //     }
  //     res.status(200).json(result);
  //   } catch (error) {
  //     res.status(500).json({message: error.message});
  //   }
  // });

  // router.patch("/comment/:id", async (req, res) => {
  //   const query = { _id: ObjectId(req.params.id) };
  //   const updates = {
  //     $push: { comments: req.body }
  //   };
  //   let collection = await db.collection("posts");
  //   let result = await collection.updateOne(query, updates);
  //   res.send(result).status(200);
  // })
  
  // app.delete('/user/:id', async (req, res) => {
  //   try {
  //     const {id} = req.params;
  //     let myColl = myDb.collection("Users");
  //     const result = await myColl.deleteOne({_id: new ObjectID(id)});
  //     if (!result) {
  //       return res.status(404).json({message: `a user with ID ${id} cannot be found.`});
  //     }
  //     res.status(200).json(result);
  //   } catch (error) {
  //     res.status(500).json({message: error.message});
  //   }
      
  // });

export default router;
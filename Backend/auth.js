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
      const user = req.body;
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
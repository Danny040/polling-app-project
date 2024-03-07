const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const port = 4000; 

let corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.sendFile("index.html", {root: "../polling_app/public/"});
  });
  
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

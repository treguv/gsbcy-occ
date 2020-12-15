const express = require("express");
const path = require("path");
//set up port
const PORT = process.env.PORT || 3001;
//set up middleware
//instantiate server
const app = express();
//These need to be set up any time server is looking to accept post data
//parse incomings string or array data
app.use(express.urlencoded({ extended: true }));
//parse incoming json data
app.use(express.json()); //intaking json data

app.use(express.static("public"));
//add our basic routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});
app.listen(PORT, () => {
  console.log(`Server open and listening ong port ${PORT}`);
});

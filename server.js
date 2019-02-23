const express = require("express");
const logger = require("morgan")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const path = require("path")
const routes = require("./routes/")
const app = express();
const db = require("./config/keys").mongoDB_URI;
const port = process.env.PORT || 5000;


// IF in Production:
if(process.env.NODE_ENV === 'production'){
  app.use(express.static("client/build"))
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  } )
}

//Required Routes
app.use(routes);


//Bodyparser Middelware
app.use(bodyParser.json());

//Logger - help with debugging
app.use(logger('dev'));

//DB Config and Connection
console.log(db)
mongoose
  .connect(db, {useNewUrlParser : true})
  .then(() => console.log("SUCCESSFUL MONGODB CONNECTION") )
  .catch(err => console.log(err));

//Port info
app.listen(port, () => console.log(`SERVER STARTED ON PORT ${port}`));
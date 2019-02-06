const express = require("express");
const logger = require("morgan")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const app = express();

//Required Routes
const routes = require("./routes/")
app.use(routes);

//Bodyparser Middelware
app.use(bodyParser.json());

//Logger - help with debugging
app.use(logger('dev'));

//DB Config and Connection
const db = require("./config/keys").mongoDB_URI;
console.log(db)
mongoose
  .connect(db, {useNewUrlParser : true})
  .then(() => console.log("SUCCESSFUL MONGODB CONNECTION") )
  .catch(err => console.log(err));

//Port info
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`SERVER STARTED ON PORT ${port}`));
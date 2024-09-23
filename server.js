<<<<<<< HEAD
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
=======
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const config = require('./_config');

>>>>>>> test
// Define routes
let index = require("./routes/index");
let image = require("./routes/image");

// Initializing the app
const app = express();

// connecting the database
<<<<<<< HEAD
let mongodb_url = process.env.MONGODB_URI;
let dbName = "darkroom";
mongoose.connect(
  `${mongodb_url}${dbName}`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.log(err);
  }
);

// test if the database has connected successfully
let db = mongoose.connection;
db.once("open", () => {
  console.log("Database connected successfully");
});
=======

const MONGODB_URI = process.env.MONGODB_URI || config.mongoURI[app.settings.env]
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true  },(err)=>{
    if (err) {
        console.log(err)
    }else{
        console.log(`Connected to Database: ${MONGODB_URI}`)
    }
});

// test if the database has connected successfully
// let db = mongoose.connection;
// db.once('open', ()=>{
//     console.log('Database connected successfully')
// })

>>>>>>> test


// View Engine
app.set("view engine", "ejs");

// Set up the public folder;
app.use(express.static(path.join(__dirname, "public")));

// body parser middleware
app.use(express.json());

app.use("/", index);
app.use("/image", image);

const PORT = process.env.PORT || 5000;
<<<<<<< HEAD
console.log("running on port", PORT);
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
=======
app.listen(PORT,() =>{
    console.log(`Server is listening at http://localhost:${PORT}`)
});


module.exports = app;
>>>>>>> test

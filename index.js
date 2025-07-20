console.log("Oh my god")

const express = require("express");
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//route
app.use("/", productRoute);

// const port = 5000;`
require('dotenv').config();
const uri = process.env.MONGO_URI;

app.get('/', (req, res) => {
  res.send('Hello, Express Server is Running!');
});


mongoose.connect(uri).then(() => {

  app.listen(5000, () => {
    console.log(`Server is running on http://localhost:5000`);
  });

  console.log("Connected to Database");
}).catch(() => {
  console.log("Not Connected to Database");
})








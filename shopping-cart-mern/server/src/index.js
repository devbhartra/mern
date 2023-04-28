const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

const { createProductController } = require("./controllers/createProductController");

app.use(express.json());
app.use(cors());    

// Can create a new product in mongo by passing the product data according to the schema.
app.post( "/products", createProductController);

mongoose.connect("mongodb://localhost/shopping-cart").then(() => {
    app.listen(8080);
});
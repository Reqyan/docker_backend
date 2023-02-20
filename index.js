const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://admin:admin@mongo:27017/?authSource=admin")
.then(() => console.log("Succesfully connect to DB"))
.catch((e) => console.log(e));

app.get("/", (req, res)=>{
    res.send("<h2>hi There!!! someone</h2>");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Jalan pada port ${port}`));
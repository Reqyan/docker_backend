const express = require("express");

const app = express();

app.get("/", (req, res)=>{
    res.send("<h2>hi There!!!!</h2>");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Jalan pada port ${port}`));
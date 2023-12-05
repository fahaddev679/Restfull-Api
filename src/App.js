const express = require("express");
const mongoose = require("./db/mongoose");

const router = require("./Routers/player");
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.use(router);

app.listen(port, ()=>{
    console.log(`Connection is live at port: ${port}`);
})
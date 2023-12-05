const { default: mongoose } = require("mongoose");
const Mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/SportsRank")
.then(console.log("Connection Successful"))
.catch((err) =>{
    console.error(err.message);
});
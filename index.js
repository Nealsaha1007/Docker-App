const mongoose = require("mongoose");
const express = require('express')

const app = express()


const DATABASE= "mongodb://mymongo:27017/testup";

mongoose
.connect(DATABASE, {
useNewUrlParser: true,
useCreateIndex: true,
useUnifiedTopology: true
})
.then( () => 
{
  console.log("DB Connected")
})
.catch(() => 
{
    console.log("Error in DB Connection")
});


app.get("/", (req, res) => {
    res.json({
        message: "You are visiting ROOT route"
    });
});

app.listen(8000, () => {
    console.log("8000 is ready to serve ...")
});
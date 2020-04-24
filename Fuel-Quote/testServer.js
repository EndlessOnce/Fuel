const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongoose = require('mongoose'); 
const postRoutes = require('./backend/routes/history')

const PORT = 3200;

app.use(bodyParser.json());

app.use(cors());

app.use('/history',postRoutes);
app.get('/', function(req, res){
  res.send("Hello from Server");
});


// conect to DB

const uri = String("mongodb+srv://Miguel:vGcI9w5zhjtSECak@cluster0-rcvxj.mongodb.net/test?retryWrites=true&w=majority")
mongoose.connect(uri)
.then(() =>
{
  console.log('Connect to database!');
})
.catch(() =>
{
  console.log('Connection failed!');
});



app.listen(PORT, function() {
    console.log("Server running on localhost:" + PORT);
  });


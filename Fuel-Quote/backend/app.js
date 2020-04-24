const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

const userRoutes = require("./routes/user");

const clientProfile = require("./routes/clientProfile");


mongoose.connect("mongodb+srv://John:R85jIjMquwLHTFec@cluster0-rcvxj.mongodb.net/fuel-quote?retryWrites=true&w=majority")
.then(() =>
{
  console.log('Connect to database!');
})
.catch(() =>
{
  console.log('Connection failed!');
});

app.use(bodyParser.json());
// To remove the "CORS" error when trying to access the server from the frontend.
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});


// 3 arguments being request, response, next
// app.use((req, res, next) =>
// {
//   console.log('First middleware');
//   // call next when you're sending a response
//   next();
// });

// app.use((req, res, next) =>
// {
//   res.send('Hello from express!');
// });

app.use("/api/user", userRoutes);

app.use("/api/client-profile", client-profile);


module.exports = app;

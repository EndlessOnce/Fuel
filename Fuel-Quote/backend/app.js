const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/user");
const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb+srv://John:R85jIjMquwLHTFec@cluster0-rcvxj.mongodb.net/fuel-quote?retryWrites=true&w=majority")
.then(() =>
  {
    console.log('Connect to database!');
  })
  .catch(() =>
  {
    console.log('Connection failed!');
  });

// To remove the "CORS" error when trying to access the server from the frontend.
app.use((req, res, next) =>
{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Orgin, X-Requested-With, Content-Type, Accept");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});


// 3 arguments being request, response, next
app.use((req, res, next) =>
{
  console.log('First middleware');
  // call next when you're sending a response
  next();
});

app.use((req, res, next) =>
{
  res.send('Hello from express!');
});

module.exports = app;

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

const userRoutes = require("./routes/user");
const quoteRoutes = require("./routes/quote");

mongoose.connect("mongodb+srv://Kevin:ZxnYgnrhEQ3kkcIQ@cluster0-rcvxj.mongodb.net/fuel-quote?retryWrites=true&w=majority")
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
    "Origin, X-Requested-With, Content-Type, Accept"
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
app.use("/api/quote", quoteRoutes);

// app.post ('/fuel-quote-form', function(req, res) {
//   console.log(req.body);
//   res.status(200).send({"message": "Data received"})
// })
// app.listen(port, () => 

// {
//   console.log(`Example app listening at http://localhost:${port}`);

// });
module.exports = app;

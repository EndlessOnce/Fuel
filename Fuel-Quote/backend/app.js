const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = 3000;

app.use(bodyParser.json());

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

app.get('/', function(req, res)
{
  res.send('Hello from express!');
});

app.post ('/fuel-quote-form', function(req, res) {
  console.log(req.body);
  res.status(200).send({"message": "Data received"})
})

app.listen(port, () => 
{
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;

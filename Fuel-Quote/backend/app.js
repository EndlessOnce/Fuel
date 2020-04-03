const express = require('express');

const app = express();

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

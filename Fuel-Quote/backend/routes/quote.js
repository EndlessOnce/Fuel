const express = require("express");
const Quote = require("../model/quote");
const jwt = require("jsonwebtoken");
// used to encrpyt the password
const bcrypt = require("bcrypt");
const router = express.Router();


router.post("/quoteForm", (req, res, next) => {
    const quote = new Quote({
        email: req.body.email,
        gallons: req.body.gallons,
        delivery: req.body.delivery,
        address: req.body.address,
        price: req.body.price,
        total: req.body.total
    });
    quote.save();
    console.log(quote);
    res.status(201).json({
        message: 'Quote Added Successfully'
    });
});

router.post("/setHistory", (req, res, next) => {
  
    Quote.findOne({ email: req.body.email }).then(documents => {
      res.status(200).json({
        email: documents.email
      });
    });
  });
module.exports = router;
const express = require("express");
const ClientProfile = require("../model/client");
const router = express.Router();

router.post("/clientForm", (req, res, next) => {
  const clientProfile = new ClientProfile({
    email: req.body.email,
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zipcode: req.body.zipcode,
    addressAlt: req.body.addressAlt,
  });
  clientProfile.save()
  console.log(clientProfile);
  res.status(201).json({
    message: 'Form Completed.'
  });
});
module.exports = router;

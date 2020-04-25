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

router.post("/setCity", (req, res, next) => {

  ClientProfile.findOne({ email: req.body.email }).then(documents => {
    res.status(200).json({
      city: documents.city
    });
  });
});

router.post("/setZipcode", (req, res, next) => {

  ClientProfile.findOne({ email: req.body.email }).then(documents => {
    res.status(200).json({
      zipcode: documents.zipcode
    });
  });
});

router.post("/setName", (req, res, next) => {

  ClientProfile.findOne({ email: req.body.email }).then(documents => {
    res.status(200).json({
      name: documents.name
    });
  });
});

router.post("/setState", (req, res, next) => {

  ClientProfile.findOne({ email: req.body.email }).then(documents => {
    res.status(200).json({
      state: documents.state
    });
  });
});

router.post("/setAddress", (req, res, next) => {
  ClientProfile.findOne({ email: req.body.email }).then(documents => {
    res.status(200).json({
      address1: documents.address,
      address2: documents.addressAlt
    });
  });
});
module.exports = router;

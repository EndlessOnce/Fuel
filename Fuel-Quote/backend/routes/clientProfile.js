const express = require("express");
const ClientProfile = require("../model/clientProfile");
const router = express.Router();

router.post("/client-profile", (req, res, next) => {
  const clientProfile = new ClientProfile({
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zipcode: req.body.zipcode,
    addressAlt: req.body.addressAlt,
  });

}

module.exports = router;

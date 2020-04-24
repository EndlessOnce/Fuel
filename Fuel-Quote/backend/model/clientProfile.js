const mongoose = require("mongoose");

const clientProfileSchema = mongoose.Schema({
  name: {type: String, required: true},
  address: {type: String, required: true,},
  city: {type: String, required: true,},
  state: {type: String, required: true,},
  zipcode: {type: String, required: true,},
  addressAlt?: {type: String},
});

module.exports = mongoose.model("ClientProfile", clientProfileSchema);


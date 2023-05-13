const mongoose = require("mongoose");

//Admin - Model & Schema
const Admin = new mongoose.Schema({
  fullname: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    required: false,
  },
  mail: {
    type: String,
    required: false,
  },
  mobile: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  pfpurl: {
    type: String,
    required: false,
  },
});
module.exports = mongoose.model("Admin", Admin);

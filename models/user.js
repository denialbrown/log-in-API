const express = require("express");
const app = express();

const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: Number,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
},
{ versionKey: false }
  );

module.exports = mongoose.model("user", userSchema);



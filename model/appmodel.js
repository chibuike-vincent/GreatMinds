const mongoose = require('mongoose')
const appschema = new mongoose.Schema({
  name: {
    type: String,
    min: 5,
    max: 50,
    required: true
  },
  Email: {
    type: String,
    min: 5,
    max: 50,
    required: true
  },
  password: {
    type: String,
    min: 5,
    max: 50,
    required: true
  },
  confirmpassword: {
    type: String,
    min: 5,
    max: 50,
    required: true
  }

})

module.exports = appschema
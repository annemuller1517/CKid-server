const { Schema, model } = require("mongoose");
require('./Country.model');
// 1. Define your schema
let UserSchema = new Schema({
  username: {
    type: String, 
    required: true
  },
  email: {
    type: String,
    required: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  profileImg: String,
  placesVisited: [{
    type: Schema.Types.ObjectId,
    ref: "Country"
  }]
})

// 2. Define your model
let UserModel = model('user', UserSchema)

// 3. Export your Model with 'module.exports'
module.exports = UserModel
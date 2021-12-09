## Models 
<br>

## User 
const { Schema, model } = require("mongoose");

// 1. Define your schema
const UserSchema = new Schema({
  name: String, 
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



## PlacesVisited

const { Schema, model } = require('mongoose');

const PlacesVisitedSchema = new Schema({
    country: String, 
    city: String,
    userId: [{
        type: Schema.Types.ObjectId,
        ref: "User"
      }]
    wordlist: [{
        type: Schema.Types.ObjectId,
        ref: "Words"
      }]
});

const PlacesVisited = model('PlacesVisited', PlacesVisitedSchema);

module.exports = PlacesVisited;

<br>

## Words 

const { Schema, model } = require('mongoose');

const WordsSchema = new Schema({
    date: Date,
    words: [{
        type: String
    }],
    userId: [{
        type: Schema.Types.ObjectId,
        ref: "User"
      }]
    country: [{
        type: Schema.Types.ObjectId,
        ref: "Country"
      }]
  
});

const Words = model('Words', WordsSchema);

module.exports = Words;


<br>


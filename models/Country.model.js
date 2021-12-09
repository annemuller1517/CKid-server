const { Schema, model } = require('mongoose');

const countrySchema = new Schema({
  lat: String,
  lon: Number, 
  words: [{String}],
});

const Country = model('Country', countrySchema);

module.exports = Country;

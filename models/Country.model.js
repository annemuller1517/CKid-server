const { Schema, model } = require('mongoose');
require('./User.model');

const countrySchema = new Schema({
    country: String,
    city: {
        type: String,
        unique: true
    },
    lat: String,
    lon: Number, 
    userId: {
        type: Schema.Types.ObjectId,
        ref: "user"
      },
    words: [],
});

const Country = model('Country', countrySchema);

module.exports = Country;

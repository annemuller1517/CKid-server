const { Schema, model } = require('mongoose');

const weatherSchema = new Schema({
    temp: Number, 
    main: String,
    feels_like: String,
    country: [{
        type: Schema.Types.ObjectId,
        ref: "Country"
      }]
});

const Weather = model('Weather', weatherSchema);

module.exports = Weather;

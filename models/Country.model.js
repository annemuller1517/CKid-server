const { Schema, model } = require('mongoose');
require('./User.model');


const countrySchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "UserModel"
      },
    country: String,
    city: String,
    lat: String,
    lon: Number, 
    words: [{
        
    }],
});

const Country = model('Country', countrySchema);

module.exports = Country;

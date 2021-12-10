const { Schema, model } = require('mongoose');
require('./Country.model');

const WordSchema = new Schema({
    countryId: {
        type: Schema.Types.ObjectId,
        ref: "CountryModel"
      }, 
    words: [{String}],
});

const Words = model('Words', WordSchema);

module.exports = Words;

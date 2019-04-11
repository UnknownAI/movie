const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title:  {
    type: String,
    required:[true, 'Filed is required']
  },
  year: {
    type: Number,
    required:[true, 'Filed is required']
  },
  format:  {
    type: String,
    required:[true, 'Filed is required']
  },
  actors: [
    {
      name: String,
      surname: String
    }
  ]
})

const Movie = mongoose.model('movie', MovieSchema);
module.exports = Movie;

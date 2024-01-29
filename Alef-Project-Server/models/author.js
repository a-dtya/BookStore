const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }

}, 
{ timestamps: true });

const authorModel = mongoose.model('authors', authorSchema);

module.exports = authorModel;
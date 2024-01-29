const mongoose = require('mongoose');
const reviewModel = require('./review');


const bookSchema = new mongoose.Schema({

  bookTitle: {
    type: String,
    required: true,
  },
  bookTitleAR:  {
    type: String,
    
  },
  bookPages: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  publishedYear: {
    type: Number,

  },
  bookImage: {
    type: String,
  },

  bookReviews:[reviewModel.schema],
  
  numReviews: {
    type: Number,
    default: 0,
  },
  


  description: {
    type: String,
  },
  
  descriptionAR: {
    type: String,
  },

  bookStock: {
    type: Number,
    required: true,
    default: 2
  },

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'authors',
    required: true,
  },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'categories',
    required: true,
  },
  
  language: {
    type: String,

  },
  bookFormat: {
    type: String,
  }
}, { timestamps: true });

const bookModel = mongoose.model('books', bookSchema);

module.exports = bookModel;

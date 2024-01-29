const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true
      },
      phoneNumber: {
        type: String,
        required: true,
      },
      password: {
        type: String,
      },
      address: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        // required: true,
      },
      country:{
        type: String,
        required:true,
      },
      subscribe:{
        type: String,
      },
      
      cart: [{
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Book'
        },
        quantity: {
          type: Number, 
          default: 1
        }
      }]
},{timestamps:true});

var userModel = mongoose.model('users', userSchema);

module.exports = userModel;



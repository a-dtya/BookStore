const express = require("express");
const router = express.Router();

const bookModel = require("../models/book");
const authorModel=require("../models/author")


router.get("/", async(req, res) => {
  try {
    const { low, high, author } = req.query;
    
    const query = {};

    if (author) {
      const authorObj = await authorModel.findOne({ name: author });
      if (authorObj) {
        const relatedBooks = await  bookModel.find({author:authorObj._id});
        console.log('author name :',authorObj.name, 'number of books relatedBooks----->',relatedBooks.length);
        console.log('relatedBooks----->',relatedBooks);
        res.json(relatedBooks);
      
      }else {
        console.log('Author not found in the database');
        res.status(404).json({ error: 'Author not found' });
      }
    }
   
    if( low && high ){
      query.price = { $gte: low, $lte: high };
      const filteredBooks = await bookModel.find(query);
      if (filteredBooks.length > 0) {
        console.log('Filtered books:', filteredBooks);
        res.json(filteredBooks);
      } else {
        console.log('No books found based on the provided filters');
        res.status(404).json({ error: 'No books found based on the provided filters' });
      }
    }

    
    if(!author && !low && !high){
      const allBooks = await bookModel.find({}).populate('author','name');
      
      console.log('All books:', allBooks.length);
      res.json(allBooks);
    }


  } catch (err) {
    console.log('Error in filtering books:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }

});

module.exports = router;

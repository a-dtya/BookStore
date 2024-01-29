const createBookReview = async (req, res) => {

    const { rating, comment } = req.body;
    const Book = await bookModel.findById(req.params.id);
    // const user = await userModel.findById({ _id: req.user._id });
  //   reviewModel.findOne({_id: userId }).populate("user" , "firstName").then(rev =>{
  //     res.json(rev)
  //   })
        
  
    try {
  
      if (Book) {
      //   const alreadyReviewed = Book.bookReviews.find(
      //     (r) => r.user.toString() === req.user._id.toString()
      //   );
      //   console.log(user._id)
      //   if (alreadyReviewed) {
      //     res.status(400);
      //     throw new Error("Product already reviewed");
      //   }
  
        const review = {
          // user: req.user._id,
          // name: req.user.firstName,
          rating: req.body.rating,
          comment: req.body.comment,
        };
  
        Book.bookReviews.push(review);
        Book.numReviews = Book.bookReviews.length;
        await Book.save();
        res.status(201).json({ message: "Review added",review });
      }
    } catch (err) {
      res.send(err);
    }
  };
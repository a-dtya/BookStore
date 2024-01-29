const reviewModel = require("../models/review");
const bookModel = require("../models/book");

// //* desc   Get all reviews
// //* route  GET /product/:id/review

function addReviews(review) {
  return reviewModel.create(review);
}

async function getAllReviews() {
  return reviewModel.find();
}

async function getBookReviews(bookId) {
  return bookModel.findById(bookId).populate('bookReviews.user');
}

function deleteReviews(id) {
  return reviewModel.deleteOne({ _id: id });
}

// @desc    Create new review
// @route   POST review/book/:id
// @access  Private

const createBookReview = async (req, res) => {
  const { rating, comment } = req.body;
  const Book = await bookModel.findById(req.params.id);

  try {
    const review = {
      user: req.body.user,
      rating: req.body.rating,
      comment: req.body.comment,
    };

    Book.bookReviews.push(review);
    Book.numReviews = Book.bookReviews.length;
    await Book.save();

    res.status(201).json({ message: "Review added", review });
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  getAllReviews,
  addReviews,
  createBookReview,
  deleteReviews,
  getBookReviews
};

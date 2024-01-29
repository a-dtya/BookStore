const express = require("express");
const router = express.Router();
const {
  getAllReviews,
  addReviews,
  getBookReviews,
  deleteReviews,
  createBookReview,
} = require("../Controllers/reviewController");

////////////////////////ADD New Reviews////////////////////////
// router.post("/:id", async (req, res) => {
//   const id = req.params.id;
//   try {
//     let review = {
//       productId: id,
//       rating: req.body.rating,
//       comment: req.body.comment,
//     };
//     let addReview = await addReviews(review);
//     res.json(addReview);
//   } catch (err) {
//     res.send(err);
//   }
// });
////////////////////////GET ALL Reviews////////////////////////
router.get("/", async (req, res) => {
  console.log("fetching reviews");
  try {
    let allReviews = await getAllReviews();
    res.json(allReviews);
  } catch (err) {
    res.send(err);
  }
});
////////////////////////GET ALL Reviews for Book////////////////////////

router.post('/book/:id',createBookReview);

////////////////////////Delete Reviews BY ID////////////////////////

router.get("/book/:id", async (req, res) => {
  let id = req.params.id;
  console.log("fetching reviews");
  try {
    let allReviews = await getBookReviews(id);
    res.json(allReviews);
  } catch (err) {
    res.send(err);
  }
});

//////////////////////////////////////////////////////////////////////
router.delete("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let deleted = await deleteReviews(id);
    res.json(deleted);
  } catch (err) {
    res.send(err);
  }
});


module.exports = router;

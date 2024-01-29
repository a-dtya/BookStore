const express = require("express");
const router = express.Router();
const {
  getAllBooks,
  getBookByID,
  createNewBook,
  updateBook,
  deleteBook,
} = require("../Controllers/bookControllers");


//get all books
router.get("/", async (req, res, next) => {
  try {
    let allBooks = await getAllBooks();
    console.log(allBooks);
    res.json(allBooks);
  } catch (err) {
    res.send(err);
  }
});

// get book by id
router.get("/:id", async (req, res, next) => {
  let id = req.params.id;

  try {
    let book = await getBookByID(id);
    res.json(book);
  } catch (err) {
    res.send(err.message);
  }
});

// add a new book
router.post("/", async (req, res, next) => {
  let book = req.body;

  try {
    let createdBook = await createNewBook(book);
    console.log(createdBook);
    // res.send(`new book created : ${createdBook}`)
    res.json({ message: `new book created`, createdBook });
  } catch (err) {

    res.send(err);
    
  }
});

//update book's quantity
router.patch("/:id", async (req, res, next) => {
  let id = req.params.id;
  let updates = req.body;

  try {
    let updatedBook = await updateBook(id, updates);
    res.json(updatedBook);
  } catch (err) {
    res.send(err.message);
  }
});

//delete a book by id
router.delete("/:id", async (req, res, next) => {
  let id = req.params.id;
  try {
    let deleted = await deleteBook(id);
    res.json(deleted);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;

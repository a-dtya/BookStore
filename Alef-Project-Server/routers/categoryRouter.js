const express = require("express");
const router = express.Router();

const {
  getAllCategories,
  addCategory,
  deleteCategory,
} = require("../Controllers/categoryController");
////////////////////////GET ALL CATEGORIES////////////////////////
router.get("/", async (req, res) => {
  try {
    let allCategories = await getAllCategories();
    res.json(allCategories);
  } catch (err) {
    res.send(err);
  }
});
////////////////////////ADD NEW CATEGORY////////////////////////
router.post("/", async (req, res) => {
  let category = req.body;

  try {
    let addedCategory = await addCategory(category);
    res.json(`new category added successfully ${addedCategory}`);
  } catch (err) {
    res.send(err);
  }
});
////////////////////////DELETE CATEGORY BY ID////////////////////////
router.delete("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let deleted = await deleteCategory(id);
    res.json(deleted);
  } catch (err) {
    res.send(err);
  }
});
/////////////////////////////////////////////////////////////////////

module.exports = router;

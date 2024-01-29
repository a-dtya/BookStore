const categoryModel = require("../models/category");

async function getAllCategories() {
  return categoryModel.find();
}

function addCategory(category) {
  return categoryModel.create(category);
}

function deleteCategory(id) {
  return categoryModel.deleteOne({ _id: id });
}

module.exports = { getAllCategories, addCategory, deleteCategory };


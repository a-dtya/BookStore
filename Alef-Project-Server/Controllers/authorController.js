var authorModel = require("../models/author");

function createAuthor(author) {
  return authorModel.create(author);
}

function getAllAuthor() {
  return authorModel.find();
}
function editAuthorById(id, name) {
  return authorModel.findByIdAndUpdate(id, {name: name}, { new: true });
}

function deleteAuthorById(id) {
  return authorModel.findByIdAndDelete(id);
}

module.exports = { createAuthor, getAllAuthor, deleteAuthorById, editAuthorById };

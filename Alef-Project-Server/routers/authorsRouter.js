const express = require('express');
var { createAuthor, getAllAuthor, deleteAuthorById, editAuthorById } = require("../Controllers/authorController");
var Router = express.Router();


////////////////////////////////////////////
Router.post("/", async (req, res) => {
    console.log(req.body);
    var author = req.body;
    try {
        var newAuthor = await createAuthor(author);
        res.json(newAuthor);
    } catch (e) {
        res.json(e.message);
    }
});

Router.get("/", async (req, res) => {
    try {
        var Authors = await getAllAuthor();
        res.json(Authors);
    } catch (e) {
        res.json(e.message);
    }
});

Router.patch("/:id", async (req, res) => {
    console.log(req.body);
    var { name } = req.body;
    var { id } = req.params;
    try {
        var UpdatedAuthor = await editAuthorById(id, name);
        res.json(UpdatedAuthor);
    } catch (e) {
        res.json(e.message);
    }
});


Router.delete("/:id", async (req, res) => {
    var id = req.params.id;
    try {
        var deletedAuthor = await deleteAuthorById(id);
        res.json(deletedAuthor);
    } catch (e) {
        res.json(e.message);
    }
});

module.exports = Router;
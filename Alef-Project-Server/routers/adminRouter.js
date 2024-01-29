const express = require("express");
var router = express.Router();
const controllers = require('../Controllers/adminController');

/* -------------------------------------------------------------------------- */
/*                                listing admins                               */
/* -------------------------------------------------------------------------- */


router.get("/", async (req, res) => {
  try {
    let admins = await controllers.listAdmin();
    if (admins !== null) {
      console.log('Admin Listed Successfully');
      res.status(200).json(admins)
    }
    else {
      res.status(404).json({ Warning: "No Admin Found!" });
    }
  } catch (error) {
    console.error('Error occurred while fetching admins:', error);
    return res.status(500).json({ error: "Error occurred while fetching admins" });
  }
})

/* -------------------------------------------------------------------------- */
/*                            getting a admin by id                            */
/* -------------------------------------------------------------------------- */

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const foundAdmin = await controllers.getAdmin(id);

    if (foundAdmin) {
      return res.status(200).json({ message: `Admin Found Successfully`, admin: foundAdmin });
    }
    console.log(`Admin with ID:${id} can't be found `);
    return res.status(404).json({ warning: `Admin with ID:${id} can't be found ` });
  } catch (error) {
    console.error('Error occurred in the route:', error);
    return res.status(500).json({ error: `Error occurred while fetching a admin >> ${error.reason} ` });
  }
});
/* -------------------------------------------------------------------------- */
/*                           editting a admin  by id                           */
/* -------------------------------------------------------------------------- */

router.patch("/:id", async (req, res) => {
  let newData = req.body;
  let id = req.params.id
  try {
    const updatedAdmin = await controllers.editAdmin(id, newData);
    if (updatedAdmin !== null) {
      res.status(200).json({ message: `admin with ID:${id} edited successfully`, admin: updatedAdmin });
    }
    else {
      res.status(404).json({ Warning: `admin with ID:${id} can't be found` });
    }
  } catch (error) {
    console.error('Error occurred while updating admins:', error);
    return res.status(500).json({ error: `Error occurred while editting a admin >>${error.reason} ` })
  }
});
/* -------------------------------------------------------------------------- */
/*                           deletting a admin  by id                          */
/* -------------------------------------------------------------------------- */

router.delete("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    const deletedAdmin = await controllers.deleteAdmin(id)
    // Delete all todos attached to the admin's adminId
    if (deletedAdmin) {
      res.status(200).json(`A admin With ID:${id}  Deleted Successfully.`);
    } else {
      res.status(404).json(`admin With The ID:${id} Can't Be Found.`);
    }
  } catch (error) {
    console.error(`Error occurred while deleting the admin >>${error}`);
    return res.status(500).json({ error: `Error occurred while deleting a admin >>${error.reason} ` });

  }
})

module.exports = router;
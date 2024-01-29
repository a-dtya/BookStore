const express = require("express");
var router = express.Router();
const controllers = require('../Controllers/usersController');

/* -------------------------------------------------------------------------- */
/*                                listing users                               */
/* -------------------------------------------------------------------------- */

router.get("/", async (req, res) => {
  try {
    let users = await controllers.listUsers();
    if (users !== null) {
      console.log('User Listed Successfully');
      res.status(200).json(users)
    }
    else {
      res.status(404).json({ Warning: "No Users Found!" });
    }
  } catch (error) {
    console.error('Error occurred while fetching users:', error);
    return res.status(500).json({ error: "Error occurred while fetching users" });
  }
})

/* -------------------------------------------------------------------------- */
/*                            getting a user by id                            */
/* -------------------------------------------------------------------------- */

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const foundUser = await controllers.getUser(id);

    if (foundUser) {
      return res.status(200).json({ message: `User Found Successfully`, user: foundUser });
    }
    console.log(`User with ID:${id} can't be found `);
    return res.status(404).json({ warning: `User with ID:${id} can't be found ` });
  } catch (error) {
    console.error('Error occurred in the route:', error);
    return res.status(500).json({ error: `Error occurred while fetching a user >> ${error.reason} ` });
  }
});
/* -------------------------------------------------------------------------- */
/*                           editting a user  by id                           */
/* -------------------------------------------------------------------------- */

router.patch("/:id", async (req, res) => {
  let newData = req.body;
  let id = req.params.id
  try {
    const updatedUser = await controllers.editUser(id, newData);
    if (updatedUser !== null) {
      res.status(200).json({ message: `user with ID:${id} edited successfully`, user: updatedUser });
    }
    else {
      res.status(404).json({ Warning: `User with ID:${id} can't be found` });
    }
  } catch (error) {
    console.error('Error occurred while updating users:', error);
    return res.status(500).json({ error: `Error occurred while editting a user >>${error.reason} ` })
  }
});
/* -------------------------------------------------------------------------- */
/*                           deletting a user  by id                          */
/* -------------------------------------------------------------------------- */

router.delete("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    const deletedUser = await controllers.deleteUsers(id)
    // Delete all todos attached to the user's userId
    if (deletedUser) {
      res.status(200).json(`A User With ID:${id}  Deleted Successfully.`);
    } else {
      res.status(404).json(`User With The ID:${id} Can't Be Found.`);
    }
  } catch (error) {
    console.error(`Error occurred while deleting the user >>${error}`);
    return res.status(500).json({ error: `Error occurred while deleting a user >>${error.reason} ` });

  }
})

module.exports = router;
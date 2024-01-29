//////////////////////////////////////
let userModel = require("../models/user");
let orderModel = require("../models/order");

//////////////////////////////////////
// for the login and authentication

// const bcrypt = require('bcryptjs');
// var jwt = require('jsonwebtoken');

//////////////////////////////////////

const usersController = {

  async listUsers() {
    try {
      const count = await userModel.countDocuments({});
      if (count !== 0) {
        const users = await userModel.find();
        return users
      } return null
    } catch (error) {
      throw error;
    }
  }
  ,

  async getUser(id) {
    try {
      const count = await userModel.countDocuments({});
      if (count === 0) { return null }
      const foundUser = await userModel.findById(id);
      return foundUser;
    } catch (error) {
      throw error;
    }
  }
  ,

  async editUser(id, newData) {
    try {
      let updatedAt = { updatedAt: Date.now() }
      let newTimedData = { ...newData, ...updatedAt }
      console.log(newTimedData);
      const count = await userModel.countDocuments({});
      if (count === 0) { return null }
      const updatedUser = await userModel.findByIdAndUpdate(id, newTimedData, { new: true });
      return updatedUser;
    } catch (error) {
      throw error;
    }
  }
  ,

  async deleteUsers(id) {
    try {
      const deletedUser = await userModel.findByIdAndDelete(id);
      if (deletedUser) {
        let userId = id
        await orderModel.deleteMany({ userId })
        return deletedUser;
      }
    } catch (error) {
      throw error;
    }
  }
}

//////////////////////////////////////
module.exports = usersController;
//////////////////////////////////////

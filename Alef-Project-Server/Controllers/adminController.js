  let adminModel = require("../models/admin");


const adminController = {

  async listAdmin() {
    try {
      const count = await adminModel.countDocuments({});
      if (count !== 0) {
        const admin = await adminModel.find();
        return admin
      } return null
    } catch (error) {
      throw error;
    }
  }
  ,

  async getAdmin(id) {
    try {
      const count = await adminModel.countDocuments({});
      if (count === 0) { return null }
      const foundAdmin = await adminModel.findById(id);
      return foundAdmin;
    } catch (error) {
      throw error;
    }
  }
  ,

  async editAdmin(id, newData) {
    try {
      let updatedAt = { updatedAt: Date.now() }
      let newTimedData = { ...newData, ...updatedAt }
      console.log(newTimedData);
      const count = await adminModel.countDocuments({});
      if (count === 0) { return null }
      const updatedAdmin = await adminModel.findByIdAndUpdate(id, newTimedData, { new: true });
      return updatedAdmin;
    } catch (error) {
      throw error;
    }
  }
  ,

  async deleteAdmin(id) {
    try {
      const deletedAdmin = await adminModel.findByIdAndDelete(id);
      if (deletedAdmin) {
        return deletedAdmin;
      }
    } catch (error) {
      throw error;
    }
  }
}

//////////////////////////////////////
module.exports = adminController;
//////////////////////////////////////

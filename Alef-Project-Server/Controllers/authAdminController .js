const adminModel = require('../models/admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const authAdminController = {

  async register(req, res) {
    try {
      const { password, ...adminData } = req.body;
      
      const hashedPassword = await bcrypt.hash(password, 10)
      const admin = await adminModel.create({ password: hashedPassword, ...adminData });
      return res.status(200).json({ message: 'Register Successful' });
    } catch (err) {
      console.log(err);
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const admin = await adminModel.findOne({ email });
      console.log('admin', admin)
      isPasswordValid = admin === null ? false : await bcrypt.compare(password, admin.password)
      console.log('valid password', isPasswordValid)
      if (!admin || !isPasswordValid) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
      const token = jwt.sign(
        { id: admin.id, adminName: admin.email },
        process.env.SECRET
      );
      return res.status(200).json({ message: 'Login Successful', token, email: admin.email , userId : admin.id});
    } catch (err) {
      console.log(err);
    }
  },
}

module.exports = authAdminController;
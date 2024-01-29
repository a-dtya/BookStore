var userModel = require('../models/user')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const adminModel = require('../models/admin');

const authController = {
  async register(req, res) {
    try {
      const { password, firstName ,email,...userData} = req.body;
      if(firstName.toLowerCase() === 'admin'){
        const admin = new adminModel({ email:email, password:password });
            await admin.save();
      }

      
      const hashedPassword = await bcrypt.hash(password, 10)
      const user = await userModel.create({ password: hashedPassword,firstName:firstName,email:email, ...userData });
      return res.status(200).json({ message: 'Register Successful' });
    } catch (err) {
      console.log(err);
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await userModel.findOne({ email });
      console.log('user', user)
      isPasswordValid = user === null ? false : await bcrypt.compare(password, user.password)
      console.log('valid password', isPasswordValid)
      if (!user || !isPasswordValid) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
      const token = jwt.sign(
        { id: user.id, userName: user.userName },
        process.env.SECRET
      );
      return res.status(200).json({ message: 'Login Successful', token, userName: user.userName , userId : user.id});
    } catch (err) {
      console.log(err);
    }
  },
}

module.exports = authController;
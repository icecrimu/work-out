const User = require('../models/userModel');

// login user
const loginUser = async (req, res) => {
  res.json({ message: 'Login' });
};

// signup user
const signupUser = async (req, res) => {
  res.json({ message: 'Signup' });
};

module.exports = {
  loginUser,
  signupUser
};

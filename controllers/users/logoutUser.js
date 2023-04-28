const User = require('../../models/userModel');

const logoutUser = async (req, res) => {
  const { _id } = req.user;

  await User.updateOne({ _id }, { accessToken: '' });

  res.status(204).json({ message: 'No Content' });
};

module.exports = logoutUser;
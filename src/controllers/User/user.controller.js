const getAllUsers = (req, res) => {
  return res.status(200).json({ msg: "User Working Okay..." });
};

module.exports = getAllUsers;

const User = require("../../models/User/user.model");
const bcrypt = require("bcryptjs");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json({ msg: "User Working Okay...", userList: users });
  } catch (error) {}
};

const userSignup = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(406).json({ msg: "All Fields must be completed" });
  } else {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newUser = await User({ username, email, password: hashedPassword });
      await newUser.save();
      return res.status(201).json({ msg: "user created successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "user not created", error });
    }
  }
};

module.exports = { getAllUsers, userSignup };

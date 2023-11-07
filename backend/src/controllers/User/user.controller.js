const bcrypt = require("bcryptjs");
const { COOKIE_NAME } = require("../../constants");
const User = require("../../models/User/user.model");
const { CreateToken } = require("../../utils/CreateToken");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json({ msg: "User Working Okay...", userList: users });
  } catch (error) {}
};

const userSignup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const isExistUser = await User.exists({ email });
    if (isExistUser) {
      return res.status(403).json({ msg: "User Already Exist" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User({ username, email, password: hashedPassword });
    await newUser.save();
    return res.status(201).json({ msg: "user created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "user not created", error });
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    const isPassword = await bcrypt.compare(password, user.password);

    if (!user?.email) {
      return res.status(401).send("User not registered");
    }
    if (!isPassword) {
      return res.status(403).send("Incorrect Password");
    }

    // Clearing Cookies Before Generating Token
    res.clearCookie(COOKIE_NAME, {
      httpOnly: true,
      domain: "localhost",
      signed: true,
      path: "/",
    });

    // Generating Token
    const Token = CreateToken(user._id, user.email, "24h");
    const expires = new Date();
    expires.setDate(expires.getDate() + 1);

    //Assigning Token In Http-only Cookies
    res.cookie(COOKIE_NAME, Token, {
      path: "/",
      domain: "localhost",
      expires,
      httpOnly: true,
      signed: true,
    });

    // Success Response of Login
    return res.status(200).json({ msg: "User Login Successfully...", name: user.username, email: user.email });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Server Error", error: error.message });
  }
};

module.exports = { getAllUsers, userSignup, userLogin };

const express = require("express");
const { getAllUsers, userSignup, userLogin } = require("../../controllers/User/user.controller");
const userRoute = express.Router();

userRoute.get("/", getAllUsers);
userRoute.post("/signup", userSignup);
userRoute.post("/login", userLogin);

module.exports = userRoute;

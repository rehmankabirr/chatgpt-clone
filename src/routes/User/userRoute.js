const express = require("express");
const { getAllUsers, userSignup } = require("../../controllers/User/user.controller");
const userRoute = express.Router();

userRoute.get("/", getAllUsers);
userRoute.post("/signup", userSignup);

module.exports = userRoute;

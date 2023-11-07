const express = require("express");
const { getAllUsers, userSignup, userLogin } = require("../../controllers/User/user.controller");
const { Validate, LoginValidator, SignupValidator } = require("../../utils/Validators");
const userRoute = express.Router();

userRoute.get("/", getAllUsers);
userRoute.post("/signup", Validate(SignupValidator), userSignup);
userRoute.post("/login", Validate(LoginValidator), userLogin);

module.exports = userRoute;

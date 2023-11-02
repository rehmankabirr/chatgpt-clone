const express = require("express");
const getAllUsers = require("../../controllers/User/user.controller");
const userRoute = express.Router();

userRoute.get("/", getAllUsers);

module.exports = userRoute;

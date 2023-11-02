const express = require("express");
const getAllchats = require("../../controllers/User/chat.controller");
const chatRoute = express.Router();

chatRoute.get("/", getAllchats);

module.exports = chatRoute;

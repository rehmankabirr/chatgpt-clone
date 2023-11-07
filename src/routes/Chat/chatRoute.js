const express = require("express");
const getAllchats = require("../../controllers/Chat/chat.controller");
const chatRoute = express.Router();

chatRoute.get("/", getAllchats);

module.exports = chatRoute;

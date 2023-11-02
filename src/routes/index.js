const express = require("express");
const userRoute = require("./User/userRoute");
const chatRoute = require("./User/chatRoute");
const appRouter = express.Router();

appRouter.use("/user", userRoute);
appRouter.use("/chat", chatRoute);

module.exports = appRouter;

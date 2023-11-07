const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const appRouter = require("./routes");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(morgan("dev"));

// Routes
app.use("/api/v1", appRouter);

module.exports = app;

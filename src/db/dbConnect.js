const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    const connection = mongoose.connection;
    connection.on("connect", () => {
      console.log("Database is Connected Successfully...");
    });
    connection.on("error", () => {
      console.log("something went wrong, database is not connected.");
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { dbConnect };

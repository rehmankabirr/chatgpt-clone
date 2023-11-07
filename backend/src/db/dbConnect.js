const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database is Connected Successfully...");
  } catch (error) {
    console.log(error);
    throw new Error("Could not Connect To MongoDB");
  }
};

module.exports = { dbConnect };

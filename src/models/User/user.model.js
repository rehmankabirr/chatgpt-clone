const mongoose = require("mongoose");
const { randomUUID } = require("crypto");

const ChatSchema = new mongoose.Schema({
  id: {
    type: String,
    default: randomUUID,
  },
  role: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
});

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please Provide a Username"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please Provide a Email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please Provide a Password"],
    },
    chats: [ChatSchema],
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;

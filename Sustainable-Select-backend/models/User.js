const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  img: {
    type: String,
  },
  carbonCreditsPoints: {
    type: Number,
    default: 0,
  },
  points: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);

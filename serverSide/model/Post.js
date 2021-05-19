const mongoose = require("mongoose");

let postSchema = mongoose.Schema({
  userMail: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
    max: 100,
  },
  images: {
    type: Object,
    required: true,
    max: 4,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0,
  },
  comments: [],
});

module.exports = mongoose.model("Post", postSchema);

const express = require("express");

const Post = require("../model/Post");
const verifyToken = require("../tokensWork/verifyToken");

const router = express.Router();

// /api/posts/get/last
router.get("/last", verifyToken, async (req, res) => {
  let posts = await Post.find().sort({ createdAt: -1 }).limit(10);
  let posts1 = posts.map((item) => {
    let images = [];
    for (let i in item.images) {
      images.push("data:image/png;base64," + item.images[i].toString("base64"));
    }
    let obj = {
      userMail: item.userMail,
      text: item.text,
      images: images,
    };
    return obj
  });
  res.send(posts1);
});

module.exports = router;

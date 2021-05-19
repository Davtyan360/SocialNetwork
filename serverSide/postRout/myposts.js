const express = require("express");
const router = express.Router();
const User = require("../model/User");
const Post = require("../model/Post");

router.get("/posts/:id", async (req, res) => {
  const user = await User.findOne({ _id: req.params.id });
  if (!user) res.send({ error: "error" }).status(400);
  let arr = [];
  user.postsID.map(async (item, ind, arr1) => {
    let post = await Post.findOne({ _id: item });
    if (!post) return;
    let images = [];
    for (let i in post.images) {
      images.push("data:image/png;base64," + post.images[i].toString("base64"));
    }
    let obj = {
      userName: user.name,
      images: images,
      text: post.text,
      comments: post.comments,
    };
    console.log(ind);
    await arr.unshift(obj);
    if (ind == arr1.length - 1) res.send(arr);
  });
});
module.exports = router;

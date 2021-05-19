const express = require("express");
const fs = require("fs");

const Post = require("../model/Post");
const User = require("../model/User");

const router = express.Router();

//app/posts/create
router.post("/create/:id", async (req, res) => {
  let user = await User.findOne({_id:req.params.id});
  let obj1 = {};
  await req.files['images'].map(async (element, ind) => {
    await fs.readFile(
      element.destination + element.filename,
      async (err, data) => {
        if (err) console.log(err);
        obj1[`img${ind}`] = await data;
      }
    );
  });
  const post = new Post({
    userMail: user.email,
    text: req.body.text,
    images: obj1,
  });
  deleteDirImg("./uploads");
  await updateUserPostsID(user._id, post._id);
  await post.save();
  await res.send(post);
});

//deleting all messages from uploads dir
function deleteDirImg(path) {
  fs.readdir(path, (err, files) => {
    if (err) console.log(err);
    for (const file of files) {
      if (file.split(".")[1] != "PNG" && file.split(".")[1] != "JPG") continue;
      fs.unlink(path + "/" + file, function (err) {
        if (err) console.log(err);
      });
    }
  });
}

//adding new posts id to User postID
async function updateUserPostsID(id, newID) {
  const user = await User.findOne({ _id: id });
  user.postsID.push(newID);
  const result = await User.updateOne(
    { _id: id },
    {
      $set: {
        postsID: user.postsID,
      },
    }
  );
  return result;
}

module.exports = router;

const express = require("express");
const router = express.Router();
const User = require("../model/User");

router.get("/json/:id", async (req, res) => {
  let user = await User.findOne({ _id: req.params.id });
  res.send({
    name: user.name,
    email: user.email,
    postsLenght: postsID.length,
  });
});
module.exports = router;

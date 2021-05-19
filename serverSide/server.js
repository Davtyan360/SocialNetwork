require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

const auth = require("./authRout/auth");
const tokenw = require("./tokensWork/verifyToken");
const connections = require("./connections");
const uploadImage = require("./uploadImage/upload");
const createPost = require("./postRout/creaetPost");
const maininfo = require("./userRout/main");
const allposts = require("./postRout/myposts");

app.use(cors({ origin: true, credentials: true }));

app.use(express.json());
app.use("/api/users", auth);
//app.use(tokenw);
app.use("/api/users/data", maininfo);
app.use("/api/all", allposts);
app.use(
  "/api/posts",
  uploadImage.fields([
    { name: "images", maxCount: 1 },
    { name: "text", maxCount: 1 },
  ]),
  createPost
);
connections.connect(app);

const {
  getposts,
  getPostsById,
  getAddPosts,
  postAddPosts,
  deletePost,
} = require("../controllers/posts.controller");
const router = require("./teacher.routes");

const postRouter = require("express").Router();

postRouter.get("/posts", getposts);

postRouter.get("/post/:postId", getPostsById);

postRouter.get("/add-post", getAddPosts);

postRouter.post("/add-post", postAddPosts);

postRouter.delete("/post/:postIdDel", deletePost);

module.exports = postRouter;

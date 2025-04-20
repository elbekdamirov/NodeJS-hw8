const {
  getComments,
  getCommentsById,
  getAddComment,
  postAddComment,
  deleteCommentById,
  getEditCommentById,
  putEditCommentById,
} = require("../controllers/comments.controller");

const commentsRouter = require("express").Router();

commentsRouter.get("/comments", getComments);

commentsRouter.get("/comment/:commentId", getCommentsById);

commentsRouter.get("/add-comment", getAddComment);

commentsRouter.post("/add-comment", postAddComment);

commentsRouter.delete("/comment/:id", deleteCommentById);

commentsRouter.get("/edit-comment/:id", getEditCommentById);

commentsRouter.put("/edit_comment/:id", putEditCommentById);

module.exports = commentsRouter;

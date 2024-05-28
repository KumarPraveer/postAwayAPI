import CommentController from "./comment.controller.js";
import express from "express";

const CommentRouter = express.Router();

const commentController = new CommentController();
CommentRouter.get("/", commentController.getCommentsOfSpecificPost);
CommentRouter.post("/:id", commentController.addCommentOfSpecificPost);
CommentRouter.delete("/:id", commentController.deleteCommentById);
export default CommentRouter;

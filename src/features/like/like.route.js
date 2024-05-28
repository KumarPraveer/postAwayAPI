import LikeController from "./like.controller.js";
import express from "express";

const LikeRoute = express.Router();

const likeController = new LikeController();
LikeRoute.get("/:postId", likeController.getLikeOfSpecificPost);
LikeRoute.get("/toggle/:postId", likeController.toggleLikeStatus);
export default LikeRoute;

import PostController from "./post.controller.js";
import express from "express";

const PostRouter = express.Router();

//route to get all the posts
const postController = new PostController();
PostRouter.get("/all", postController.getAllPosts);

//route to get post by id
PostRouter.get("/:postId", postController.getOnePost);

//route to get post by userId
PostRouter.get("/", postController.getUserPost);

//route to create post by logged in user
PostRouter.post("/", postController.createPost);

//route to update the post
PostRouter.put("/", postController.updatePost);

//route to delete post by id
PostRouter.delete("/:postId", postController.deletePost);

export default PostRouter;

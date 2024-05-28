import express from "express";
import bodyParser from "body-parser";
import UserRouter from "./src/features/user/user.route.js";
import PostRouter from "./src/features/post/post.route.js";
import CommentRouter from "./src/features/comment/comment.route.js";
import LikeRouter from "./src/features/like/like.route.js";
import jwtAuth from "./src/middleware/jwtAuth.js";
const server = express();
const port = 3000;

server.use(bodyParser.json());

server.use("/api/users", UserRouter);
server.use("/api/posts", jwtAuth, PostRouter);
server.use("/api/comments", jwtAuth, CommentRouter);
server.use("/api/likes", jwtAuth, LikeRouter);

server.use((err, req, res, next) => {
  console.log(err);
  res.status(503).send("Something went wrong, please try later!");
});

server.listen(port, () => {
  console.log("server is up at the port ", port);
});

import PostModal from "./post.model.js";
export default class PostController {
  //getting all the posts
  getAllPosts(req, res) {
    const posts = PostModal.get();
    if (!posts) {
      return res.send("Not post Available");
    }
    return res.send(posts);
  }

  //getting a single post by id
  getOnePost(req, res) {
    const id = parseInt(req.query.postId);
    const post = PostModal.getPostId(id);
    if (!post) {
      return res.send("post not found!");
    }
    return res.send(post);
  }

  //getting specific post by credentials
  getUserPost(req, res) {
    const post = PostModal.getPostUser(req.userId);
    if (!post) {
      return res.status(404).send("Not any post yet!");
    }
    return res.status(200).send(post);
  }

  //creating a post
  createPost(req, res) {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).send("login to create post");
    }
    const { caption, imageUrl } = req.body;
    const post = PostModal.createPost(userId, caption, imageUrl);

    return res.status(201).send(post);
  }
  //update a post
  updatePost(req, res) {
    const postId = parseInt(req.query.postId);
    const userId = req.userId;
    const { caption, imageUrl } = req.body;
    if (!userId) {
      return res.status(401).send("login to update post");
    }
    const post = PostModal.findAndUpdate(userId, postId, caption, imageUrl);
    if (!post) {
      return res.status(404).send("Post not found to update");
    }
    return res.status(200).send(post);
  }
  //delete a post
  deletePost(req, res) {
    const userId = req.userId;
    const postId = parseInt(req.params.postId);
    const post = PostModal.findAndDelete(userId, postId);
    if (!post) {
      return res.status(404).send("No element to be deleted");
    }
    return res.status(200).send("Deleted Successfully");
  }
}

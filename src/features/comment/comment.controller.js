import CommentModal from "./comment.model.js";

export default class CommentController {
  getCommentsOfSpecificPost(req, res) {
    const postId = parseInt(req.query.postId);
    const comments = CommentModal.getComments(postId);
    if (comments.length == 0) {
      return res.status(200).send("not comment found yet");
    }
    return res.status(200).send(comments);
  }

  addCommentOfSpecificPost(req, res) {
    const postId = parseInt(req.params.id);
    const userId = req.userId;
    const comment = req.body;
    const new_comment = CommentModal.createComment(userId, postId, comment);
    return res.status(200).send(new_comment);
  }

  deleteCommentById(req, res) {
    const commentId = parseInt(req.params.id);
    console.log(commentId);
    const deletedValue = CommentModal.deleteCommentById(commentId);
    if (deletedValue == -1) {
      return res.send("no such comment found!");
    }
    return res.send("Comment deleted successfully");
  }
  
}

let comments = [];
export default class CommentModal {
  constructor(userId, postId, content) {
    this.id = comments.length + 1;
    this.userId = userId;
    this.postId = postId;
    this.content = content;
  }

  static get() {
    return comments;
  }
  static getComments(postId) {
    const result = comments.filter((c) => c.postId === postId);
    return result;
  }
  static createComment(userId, postId, comment) {
    const new_comment = new CommentModal(userId, postId, comment);
    comments.push(new_comment);
    return new_comment;
  }
  static deleteCommentById(commentId) {
    const index = comments.findIndex((c) => c.id === commentId);
    console.log(index);
    if (index != -1) {
      const deletedValue = comments.splice(index, 1);
      return deletedValue;
    }
    return -1;
  }
}

comments = [new CommentModal(1, 1, "Wow Nice!")];

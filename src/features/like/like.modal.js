let likes = [];
export default class LikeModal {
  constructor(userId, postId) {
    this.id = likes.length + 1;
    this.userId = userId;
    this.postId = postId;
  }
  static get() {
    return likes;
  }

  static getLike(postId) {
    const result = likes.filter((l) => l.postId === postId);
    if (!result) {
      return -1;
    }
    return result;
  }
  static toggleLike(userId, postId) {
    const likeIndex = likes.findIndex(
      (u) => u.userId === userId && u.postId === postId
    );
    if (likeIndex == -1) {
      const new_like = new LikeModal(userId, postId);
      likes.push(new_like);
    } else {
      likes.splice(likeIndex, 1);
    }
  }
}

likes = [new LikeModal(1, 1, 1)];

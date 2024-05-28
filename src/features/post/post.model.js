let posts = [];
export default class PostModal {
  constructor(userId, caption, imageUrl) {
    this.id = posts.length + 1;
    this.userId = userId;
    this.caption = caption;
    this.imageUrl = imageUrl;
  }

  static getPostId(postId) {
    const post = posts.find((p) => p.id === postId);
    return post;
  }

  static get() {
    return posts;
  }

  static createPost(userId, caption, imageUrl) {
    const new_post = new PostModal(userId, caption, imageUrl);
    posts.push(new_post);
    return new_post;
  }

  static getPostUser(userId) {
    const post = posts.filter((p) => p.userId === userId);
    return post;
  }

  static findAndUpdate(userId, postId, caption, imageUrl) {
    const post = posts.find((p) => p.userId === userId && p.id === postId);
    if (post) {
      post.caption = caption;
      post.imageUrl = imageUrl;
    }
    return post;
  }
  static findAndDelete(userId, postId) {
    const index = posts.findIndex(
      (p) => p.userId === userId && p.id === postId
    );
    console.log(index);
    if (index != -1) {
      const post = posts.splice(index, 1);
      return post;
    }
    return null;
  }
}

posts = [
  new PostModal(
    1,
    "This is good!",
    "https://upload.wikimedia.org/wikipedia/commons/c/c3/Sundar_Pichai_-_2023_%28cropped%29.jpg"
  ),

  new PostModal(
    2,
    "This post is created by vishal sahu",
    "https://upload.wikimedia.org/wikipedia/commons/c/c3/Sundar_Pichai_-_2023_%28cropped%29.jpg"
  ),
];

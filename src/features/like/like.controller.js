import LikeModal from "./like.modal.js";

export default class LikeController {
  getLikeOfSpecificPost(req, res) {
    const postId = parseInt(req.params.postId);
    const result = LikeModal.getLike(postId);
    return res.status(200).send(result);
  }

  toggleLikeStatus(req, res) {
    const userId = req.userId;
    if (!userId) {
      res.status(401).send("Unauthorized");
    }
    const postId = parseInt(req.params.postId);
    LikeModal.toggleLike(userId, postId);
    return res.send("Like Toggled!");
  }
}

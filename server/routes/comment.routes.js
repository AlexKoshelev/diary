const express = require("express");
const router = express.Router({ margeParams: true });
const Comment = require("../models/Comment");
router
  .route("/")
  .get(auth, async (req, res) => {
    try {
      const list = await Comment.find();
      res.send(list);
    } catch (e) {
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже",
      });
    }
  })
  .post(auth, async (req, res) => {
    try {
      const newComment = await Comment.create({
        ...req.body,
      });
      res.status(201).send(newComment);
    } catch (e) {
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже",
      });
    }
  });

router.delete("/:commentId", auth, async (req, res) => {
  try {
    const { commentId } = req.params;
    const removedComment = await Clients.findById(commentId);

    /*  if (removedClient.clientId.toString() === req.trainer._id) { */
    await removedComment.remove();
    return res.send(null);
    /*  } else {
      res.status(401).json({ message: "Unauthorized" });
    } */
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});
module.exports = router;

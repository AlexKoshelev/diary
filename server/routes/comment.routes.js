const express = require("express");
const router = express.Router({ margeParams: true });
const Comment = require("../models/Comment");
const chalk = require("chalk");
const auth = require("../middleware/auth.middleware");
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
    console.log(chalk.red(req));

    try {
      const newComment = await Comment.create({
        ...req.body,
      });
      res.status(201).send(newComment);
    } catch (e) {
      console.log(e);

      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже",
      });
    }
  });

router.delete("/:commentId", auth, async (req, res) => {
  try {
    const { commentId } = req.params;

    const removedComment = await Comment.findById(commentId);

    await removedComment.remove();
    return res.send(null);
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});
module.exports = router;

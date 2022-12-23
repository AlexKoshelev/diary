const express = require("express");
const router = express.Router({ margeParams: true });
const Workouts = require("../models/Workouts");
const auth = require("../middleware/auth.middleware");

router
  .route("/")
  .get(auth, async (req, res) => {
    try {
      const list = await Workouts.find();
      res.send(list);
    } catch (e) {
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже",
      });
    }
  })
  .post(auth, async (req, res) => {
    try {
      const newWorkout = await Workouts.create({
        ...req.body,
      });
      res.status(201).send(newWorkout);
    } catch (e) {
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже",
      });
    }
  });

router.delete("/:workoutId", auth, async (req, res) => {
  try {
    const { workoutId } = req.params;
    const removedWorkout = await Comment.findById(workoutId);

    /*  if (removedComment.userId.toString() === req.user._id) { */
    await removedWorkout.remove();
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

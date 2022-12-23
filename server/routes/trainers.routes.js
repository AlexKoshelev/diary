const express = require("express");
const router = express.Router({ margeParams: true });
const Trainers = require("../models/Trainers");
const auth = require("../middleware/auth.middleware");

router.patch("/:trainerId", auth, async (req, res) => {
  try {
    const { trainerId } = req.params;

    if (trainerId === req.trainer._id) {
      const updatedTrainer = await Trainers.findByIdAndUpdate(
        trainerId,
        req.body,
        {
          new: true,
        }
      );
      res.send(updatedTrainer);
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const list = await Trainers.find();
    res.send(list);
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});
module.exports = router;

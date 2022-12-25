const express = require("express");
const Clients = require("../models/Clients");
const router = express.Router({ margeParams: true });
const auth = require("../middleware/auth.middleware");
const chalk = require("chalk");
router
  .route("/")
  .get(auth, async (req, res) => {
    try {
      const list = await Clients.find();
      res.send(list);
    } catch (e) {
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже",
      });
    }
  })
  .post(auth, async (req, res) => {
    try {
      const newClient = await Clients.create({
        ...req.body,
      });

      res.status(201).send(newClient);
    } catch (e) {
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже",
      });
    }
  });
router.patch("/:clientId", auth, async (req, res) => {
  try {
    const { _id } = req.body;

    const updatedClient = await Clients.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(updatedClient);
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});
router.delete("/:clientId", auth, async (req, res) => {
  try {
    const { clientId } = req.params;

    const removedClient = await Clients.findById(clientId);

    if (removedClient.trainerId.toString() === req.trainer._id) {
      await removedClient.remove();
      return res.send(null);
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});
module.exports = router;

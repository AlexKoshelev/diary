const express = require("express");
const Clients = require("../models/Clients");
const router = express.Router({ margeParams: true });
router
  .route("/")
  .get(auth, async (req, res) => {
    try {
      const list = await Trainers.find();
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
        trainerId: req.trainer._id,
      });
      res.status(201).send(newClient);
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

    if (removedClient.clientId.toString() === req.trainer._id) {
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

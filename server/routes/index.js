const express = require("express");
const router = express.Router({ margeParams: true });

router.use("/auth", require("./auth.routes"));
router.use("/comment", require("./comment.routes"));
router.use("/clients", require("./clients.routes"));
router.use("/trainers", require("./trainers.routes"));
router.use("/workouts", require("./workouts.routes"));

module.exports = router;

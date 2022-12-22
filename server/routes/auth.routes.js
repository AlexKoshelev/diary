const express = require("express");
const router = express.Router({ margeParams: true });

router.post("./login/signup", async (req, res) => {});
router.post("./login/signin", async (req, res) => {});
router.post("./token", async (req, res) => {});
module.exports = router;

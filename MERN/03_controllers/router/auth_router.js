const express = require("express");
const router = express.Router();
const controller = require("../controllers/auth_controllers");

router.route("/").get(controller.home);
router.route("/about").get(controller.about);

module.exports = router;
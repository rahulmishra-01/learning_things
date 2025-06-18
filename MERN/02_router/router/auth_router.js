const express = require("express");
const router = express.Router();

router.route("/").get((req,res) => {
    res.status(200).send("This is home page using router")
})

router.route("/about").get((req,res) => {
    res.status(200).send("This is about us page using router")
})

module.exports = router;
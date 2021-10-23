const { login, signup } = require("./../Conroller/userController");
const express = require("express");

const router = express.Router();

router.route("/login").post(login);
router.route("/signup").post(signup);

module.exports = router;

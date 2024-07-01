const express = require("express");
const fs = require("fs");
const { login, logout } = require("../controller/authController");

const router = express.Router();

router.route("/").get((req, res) => res.send("this is the auth route...."));

router.post("/login", login);
router.post("/logout", logout);

module.exports = router;

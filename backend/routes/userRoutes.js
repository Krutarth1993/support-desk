const express = require("express");
const { append } = require("express/lib/response");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/userControllers");

router.post("/", registerUser);

router.post("/login", loginUser);

module.exports = router;

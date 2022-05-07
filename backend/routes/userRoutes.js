const express = require("express");
const { append } = require("express/lib/response");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userControllers");

const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;

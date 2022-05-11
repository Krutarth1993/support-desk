const express = require("express");
const router = express.Router();
const { getTickets, createTicket } = require("../controllers/ticketController");

const { protect } = require("../middleware/authMiddleware");

// In order to get your tickets you have to be authenticated
router.route("/").get(protect, getTickets).post(protect, createTicket);

module.exports = router;

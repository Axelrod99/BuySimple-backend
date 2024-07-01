const express = require("express");
const {
  filterByEmail,
  filterStatus,
  deleteLoan,
  filterExpiredLoans,
  getAllLoans,
} = require("../controller/loanController");

const router = express.Router();

router.route("/").get((req, res) => res.send("this is the loans route...."));

router.get("/all", getAllLoans);
router.get("/loans?status={‘pending’, ‘active’}", filterStatus);
router.get("/loans/:userEmail/get", filterByEmail);
router.get("/loans/expired ", filterExpiredLoans);
router.delete("/loan/:loanId/delete", deleteLoan);

module.exports = router;

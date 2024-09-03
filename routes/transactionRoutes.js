const express = require("express");
const {
  addTransaction,
  getAllTransaction,
  editTransaction,
  deleteTransaction,
} = require("../controllers/transactionctrl");

//router object
const router = express.Router();

//routes
//add transaction POST METHOD
router.post("/add-transaction", addTransaction);
//Edit transaction POST METHOD
router.post("/edit-transaction", editTransaction);
//Delete transaction POST METHOD
router.post("/delete-transaction", deleteTransaction);

//get transactions
router.post("/get-transaction", getAllTransaction);

module.exports = router;

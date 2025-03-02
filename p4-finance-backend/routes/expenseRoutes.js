const express = require("express");
const { addExpense, getExpenses, deleteMultipleExpenses, getSingleExpense } = require("../controllers/expenseController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();
router.post("/", authMiddleware, addExpense);
router.get("/", authMiddleware, getExpenses);
router.delete("/bulk-delete", authMiddleware, deleteMultipleExpenses);
router.get("/:id", authMiddleware, getSingleExpense);

module.exports = router;

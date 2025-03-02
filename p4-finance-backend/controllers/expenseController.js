const Expense = require("../models/expense");

const addExpense = async (req, res) => {
  const { amount, category, type } = req.body;
  try {
    const expense = await Expense.create({
      user: req.user.id,
      amount,
      category,
      type,
    });
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user.id }).sort({ date: -1 });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteMultipleExpenses = async (req, res) => {
  const { expenseIds } = req.body; // Expecting an array of IDs
  try {
    await Expense.deleteMany({ _id: { $in: expenseIds }, user: req.user.id });
    res.json({ message: "Expenses deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSingleExpense = async (req, res) => {
  try {
    const expense = await Expense.findOne({ _id: req.params.id, user: req.user.id });
    if (!expense) return res.status(404).json({ message: "Expense not found" });
    res.json(expense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addExpense, getExpenses, deleteMultipleExpenses, getSingleExpense };

const ExpensesSchema = require("../models/Expenses");
const express = require("express");
const router = express.Router();

router.get("/expenses", async (req, res) => {
  const expenseData = await ExpensesSchema.find();
  res.status(200).json(expenseData);
});

router.post("/addExp", async (req, res) => {
  const { item, category, amount, quantity } = req.body;
  console.log(item);
  try {
    const expenses = await ExpensesSchema.create({
      item: item,
      category: category,
      amount: amount,
      quantity: quantity,
    });
    res.status(200).send(expenses);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;

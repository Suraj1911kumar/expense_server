const mongoose = require("mongoose");
const ExpensesSchema = mongoose.Schema(
  {
    item: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    createdDate: {
      type: String,
      default: () => {
        return new Date().toLocaleDateString();
      },
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("Expenses", ExpensesSchema);

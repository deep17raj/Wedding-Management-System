import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BudgetExpenseForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    expense_id: "",
    couple_id: "",
    category: "",
    amount: "",
    paid_by: "",
    dates: "",
  });

  // Sample couple list for dropdown – replace with actual data from backend later
  const couples = [
    { id: 1, names: "Amit & Priya" },
    { id: 2, names: "Rahul & Sneha" },
    { id: 3, names: "Vikram & Anjali" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/expense", formData, {
        headers: { "Content-Type": "application/json" },
      });
      if (res.status == 200) {
        alert("Expense data added Succcessfully");
        navigate("/ritualdetail");
      } else {
        alert("Failed !");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("An error occurred while uploading.");
    }
    console.log("Form Submitted", formData);

    // Reset form after submission
    setFormData({
      expense_id: "",
    couple_id: "",
    category: "",
    amount: "",
    paid_by: "",
    dates: "",
    });
    // Connect this to your backend API if needed
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
      <h2 className="text-2xl font-semibold mb-6 text-center">Budget Expense Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="expense_id" className="block text-sm font-medium text-gray-700">
            Expense ID
          </label>
          <input
            type="number"
            name="expense_id"
            id="expense_id"
            value={formData.expense_id}
            onChange={handleChange}
            required
            className="mt-1 block w-full border rounded-md p-2 border-gray-300"
          />
        </div>

        <div>
          <label htmlFor="couple_id" className="block text-sm font-medium text-gray-700">
            Couple
          </label>
          <input
            name="couple_id"
            type="number"
            id="couple_id"
            value={formData.couple_id}
            onChange={handleChange}
            required
            className="mt-1 block w-full border rounded-md p-2 border-gray-300"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Expense Category
          </label>
          <input
            type="text"
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
            required
            placeholder="e.g., Venue, Catering, Photography"
            className="mt-1 block w-full border rounded-md p-2 border-gray-300"
          />
        </div>

        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
            Amount (₹)
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            step="0.01"
            value={formData.amount}
            onChange={handleChange}
            required
            className="mt-1 block w-full border rounded-md p-2 border-gray-300"
          />
        </div>

        <div>
          <label htmlFor="paid_by" className="block text-sm font-medium text-gray-700">
            Paid By
          </label>
          <input
            type="text"
            name="paid_by"
            id="paid_by"
            value={formData.paid_by}
            onChange={handleChange}
            placeholder="e.g., Bride, Groom, Both"
            className="mt-1 block w-full border rounded-md p-2 border-gray-300"
          />
        </div>

        <div>
          <label htmlFor="dates" className="block text-sm font-medium text-gray-700">
            Date of Expense
          </label>
          <input
            type="date"
            name="dates"
            id="dates"
            value={formData.dates}
            onChange={handleChange}
            className="mt-1 block w-full border rounded-md p-2 border-gray-300"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Submit Expense
        </button>
      </form>
    </div>
  );
};

export default BudgetExpenseForm;

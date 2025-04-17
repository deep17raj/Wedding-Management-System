import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const RitualsForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ritual_id: "",
    religion: "",
    ritual_name: "",
    description: "",
    importance_level: "",
  });

  const religions = ["Hindu", "Muslim", "Sikh", "Christian"];
  const importanceLevels = ["Essential", "Optional"];

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
      const res = await axios.post("http://localhost:3001/ritual", formData, {
        headers: { "Content-Type": "application/json" },
      });
      if (res.status == 200) {
        alert("Ritual data added Succcessfully");
        navigate("/booking");
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
      ritual_id: "",
    religion: "",
    ritual_name: "",
    description: "",
    importance_level: "",
    });
    // Connect to backend here if needed
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
      <h2 className="text-2xl font-semibold mb-6 text-center">Rituals & Traditions Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="ritual_id" className="block text-sm font-medium text-gray-700">
            Ritual ID
          </label>
          <input
            type="number"
            name="ritual_id"
            id="ritual_id"
            value={formData.ritual_id}
            onChange={handleChange}
            required
            className="mt-1 block w-full border rounded-md p-2 border-gray-300"
          />
        </div>

        <div>
          <label htmlFor="religion" className="block text-sm font-medium text-gray-700">
            Religion
          </label>
          <select
            name="religion"
            id="religion"
            value={formData.religion}
            onChange={handleChange}
            required
            className="mt-1 block w-full border rounded-md p-2 border-gray-300"
          >
            <option value="">Select Religion</option>
            {religions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="ritual_name" className="block text-sm font-medium text-gray-700">
            Ritual Name
          </label>
          <input
            type="text"
            name="ritual_name"
            id="ritual_name"
            value={formData.ritual_name}
            onChange={handleChange}
            required
            placeholder="e.g., Haldi, Nikah"
            className="mt-1 block w-full border rounded-md p-2 border-gray-300"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Write a short description of the ritual..."
            rows="4"
            className="mt-1 block w-full border rounded-md p-2 border-gray-300"
          ></textarea>
        </div>

        <div>
          <label htmlFor="importance_level" className="block text-sm font-medium text-gray-700">
            Importance Level
          </label>
          <select
            name="importance_level"
            id="importance_level"
            value={formData.importance_level}
            onChange={handleChange}
            required
            className="mt-1 block w-full border rounded-md p-2 border-gray-300"
          >
            <option value="">Select Importance</option>
            {importanceLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
        >
          Submit Ritual
        </button>
      </form>
    </div>
  );
};

export default RitualsForm;

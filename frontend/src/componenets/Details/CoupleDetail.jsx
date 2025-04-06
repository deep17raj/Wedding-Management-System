import React, { useState } from "react";

const CoupleDetails = () => {
  const [formData, setFormData] = useState({
    couple_id: "",
    partner1_name: "",
    partner2_name: "",
    wedding_date: "",
    religion: "",
    status: "",
  });

  const religions = ["Hindu", "Muslim", "Sikh", "Christian"];
  const statuses = ["Planning", "Married"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted! Check console for output.");
    // You can connect this to a backend API here
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
      <h2 className="text-2xl font-semibold mb-6 text-center">Couple Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="couple_id" className="block text-sm font-medium text-gray-700">
            Couple ID
          </label>
          <input
            type="number"
            name="couple_id"
            id="couple_id"
            value={formData.couple_id}
            onChange={handleChange}
            required
            className="mt-1 block w-full border rounded-md p-2 border-gray-300"
          />
        </div>

        <div>
          <label htmlFor="partner1_name" className="block text-sm font-medium text-gray-700">
            Partner 1 Name
          </label>
          <input
            type="text"
            name="partner1_name"
            id="partner1_name"
            value={formData.partner1_name}
            onChange={handleChange}
            required
            className="mt-1 block w-full border rounded-md p-2 border-gray-300"
          />
        </div>

        <div>
          <label htmlFor="partner2_name" className="block text-sm font-medium text-gray-700">
            Partner 2 Name
          </label>
          <input
            type="text"
            name="partner2_name"
            id="partner2_name"
            value={formData.partner2_name}
            onChange={handleChange}
            required
            className="mt-1 block w-full border rounded-md p-2 border-gray-300"
          />
        </div>

        <div>
          <label htmlFor="wedding_date" className="block text-sm font-medium text-gray-700">
            Wedding Date
          </label>
          <input
            type="date"
            name="wedding_date"
            id="wedding_date"
            value={formData.wedding_date}
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
            {religions.map((religion) => (
              <option key={religion} value={religion}>
                {religion}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            name="status"
            id="status"
            value={formData.status}
            onChange={handleChange}
            required
            className="mt-1 block w-full border rounded-md p-2 border-gray-300"
          >
            <option value="">Select Status</option>
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CoupleDetails;

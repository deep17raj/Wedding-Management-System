import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const VendorForm = () => {
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    vendor_id: "",
    name: "",
    service_type: "",
    phone: "",
    email: "",
    religion: "",
    price: "",
    status: "",
  });

  const religions = ["Hindu", "Muslim", "Sikh", "Christian", "All"];
  const statuses = ["Hired", "Pending", "Rejected"];

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
      const res = await axios.post("http://localhost:3001/vendor", formData, {
        headers: { "Content-Type": "application/json" },
      });
      if (res.status == 200) {
        alert("Vendor data added Succcessfully");
        navigate("/budgetdetail");
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
      vendor_id: "",
    name: "",
    service_type: "",
    phone: "",
    email: "",
    religion: "",
    price: "",
    status: "",
    });
    // Connect to your backend API here
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
      <h2 className="text-2xl font-semibold mb-6 text-center">Vendor Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="vendor_id" className="block text-sm font-medium text-gray-700">
            Vendor ID
          </label>
          <input
            type="number"
            name="vendor_id"
            id="vendor_id"
            value={formData.vendor_id}
            onChange={handleChange}
            required
            className="mt-1 block w-full border rounded-md p-2 border-gray-300"
          />
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Vendor Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full border rounded-md p-2 border-gray-300"
          />
        </div>

        <div>
          <label htmlFor="service_type" className="block text-sm font-medium text-gray-700">
            Service Type
          </label>
          <input
            type="text"
            name="service_type"
            id="service_type"
            value={formData.service_type}
            onChange={handleChange}
            required
            placeholder="e.g., Catering, Photography"
            className="mt-1 block w-full border rounded-md p-2 border-gray-300"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="e.g., +91-9876543210"
            className="mt-1 block w-full border rounded-md p-2 border-gray-300"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
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
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price (₹)
          </label>
          <input
            type="number"
            name="price"
            id="price"
            value={formData.price}
            onChange={handleChange}
            required
            step="0.01"
            className="mt-1 block w-full border rounded-md p-2 border-gray-300"
          />
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
            {statuses.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
        >
          Submit Vendor
        </button>
      </form>
    </div>
  );
};

export default VendorForm;

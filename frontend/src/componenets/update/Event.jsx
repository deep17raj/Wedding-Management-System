import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Event = () => {
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    event_id: "",
    couple_id: "",
    event_name: "",
    event_date: "",
    venue: "",
    description: "",
  });

  // Simulated list of couples - replace this with dynamic data from backend later
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
      const res = await axios.post("http://localhost:3001/event", formData, {
        headers: { "Content-Type": "application/json" },
      });
      if (res.status == 200) {
        alert("Event data added Succcessfully");
        navigate("/guestdetail");
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
      event_id: "",
    couple_id: "",
    event_name: "",
    event_date: "",
    venue: "",
    description: "",
    });
    // Submit to backend API here
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
      <h2 className="text-2xl font-semibold mb-6 text-center">Wedding Event Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="event_id" className="block text-sm font-medium text-gray-700">
            Event ID
          </label>
          <input
            type="number"
            name="event_id"
            id="event_id"
            value={formData.event_id}
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
          <label htmlFor="event_name" className="block text-sm font-medium text-gray-700">
            Event Name
          </label>
          <input
            type="text"
            name="event_name"
            id="event_name"
            value={formData.event_name}
            onChange={handleChange}
            required
            className="mt-1 block w-full border rounded-md p-2 border-gray-300"
          />
        </div>

        <div>
          <label htmlFor="event_date" className="block text-sm font-medium text-gray-700">
            Event Date
          </label>
          <input
            type="date"
            name="event_date"
            id="event_date"
            value={formData.event_date}
            onChange={handleChange}
            required
            className="mt-1 block w-full border rounded-md p-2 border-gray-300"
          />
        </div>

        <div>
          <label htmlFor="venue" className="block text-sm font-medium text-gray-700">
            Venue
          </label>
          <input
            type="text"
            name="venue"
            id="venue"
            value={formData.venue}
            onChange={handleChange}
            required
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
            rows="4"
            placeholder="Describe the event (optional)"
            className="mt-1 block w-full border rounded-md p-2 border-gray-300"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
        >
          Submit Event
        </button>
      </form>
    </div>
  );
};

export default Event;

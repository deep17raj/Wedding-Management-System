import React, { useState } from "react";

const GuestForm = () => {
  const [formData, setFormData] = useState({
    guest_id: "",
    couple_id: "",
    name: "",
    email: "",
    phone: "",
    invitation_sent: "",
    rsvp_status: "",
  });

  const rsvpOptions = ["Accepted", "Declined", "Pending"];
  const invitationOptions = [
    { label: "Yes", value: 1 },
    { label: "No", value: 0 },
  ];

  // Sample couple list – replace with actual backend data
  const couples = [
    { id: 1, names: "Amit & Priya" },
    { id: 2, names: "Rahul & Sneha" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Guest Form Submitted:", formData);
    alert("Guest information saved! Check console for details.");
    // Post this to backend when ready
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
      <h2 className="text-2xl font-semibold mb-6 text-center">Guest Registration Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="guest_id" className="block text-sm font-medium text-gray-700">
            Guest ID
          </label>
          <input
            type="number"
            name="guest_id"
            id="guest_id"
            value={formData.guest_id}
            onChange={handleChange}
            required
            className="mt-1 block w-full border rounded-md p-2 border-gray-300"
          />
        </div>

        <div>
          <label htmlFor="couple_id" className="block text-sm font-medium text-gray-700">
            Couple
          </label>
          <select
            name="couple_id"
            id="couple_id"
            value={formData.couple_id}
            onChange={handleChange}
            required
            className="mt-1 block w-full border rounded-md p-2 border-gray-300"
          >
            <option value="">Select Couple</option>
            {couples.map((c) => (
              <option key={c.id} value={c.id}>
                {c.names}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Guest Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Full Name"
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
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="e.g., +91XXXXXXXXXX"
            className="mt-1 block w-full border rounded-md p-2 border-gray-300"
          />
        </div>

        <div>
          <label htmlFor="invitation_sent" className="block text-sm font-medium text-gray-700">
            Invitation Sent?
          </label>
          <select
            name="invitation_sent"
            id="invitation_sent"
            value={formData.invitation_sent}
            onChange={handleChange}
            required
            className="mt-1 block w-full border rounded-md p-2 border-gray-300"
          >
            <option value="">Select Option</option>
            {invitationOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="rsvp_status" className="block text-sm font-medium text-gray-700">
            RSVP Status
          </label>
          <select
            name="rsvp_status"
            id="rsvp_status"
            value={formData.rsvp_status}
            onChange={handleChange}
            required
            className="mt-1 block w-full border rounded-md p-2 border-gray-300"
          >
            <option value="">Select Status</option>
            {rsvpOptions.map((status) => (
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
          Submit Guest
        </button>
      </form>
    </div>
  );
};

export default GuestForm;

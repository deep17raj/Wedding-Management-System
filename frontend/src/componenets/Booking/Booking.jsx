import React from "react";

const sampleData = {
  user: {
    user_id: "u123",
    username: "john_doe",
    email: "john@example.com",
    phone: "1234567890",
    role: "Couple",
    religion: "Christian",
  },
  couple: {
    couple_id: 1,
    partner1_name: "John",
    partner2_name: "Jane",
    wedding_date: "2025-12-15",
    religion: "Christian",
    status: "Planning",
  },
  events: [
    {
      event_id: 1,
      event_name: "Engagement",
      event_date: "2025-10-01",
      venue: "Rose Garden",
      description: "Engagement ceremony with close friends and family."
    },
    {
      event_id: 2,
      event_name: "Wedding",
      event_date: "2025-12-15",
      venue: "St. Cathedral Church",
      description: "Wedding ceremony followed by reception."
    }
  ],
  guests: [
    {
      guest_id: 1,
      couple_id: 1,
      name: "Alice",
      email: "alice@example.com",
      phone: "9876543210",
      invitation_sent: 1,
      rsvp_status: "Accepted"
    },
    {
      guest_id: 2,
      couple_id: 1,
      name: "Bob",
      email: "bob@example.com",
      phone: "8765432190",
      invitation_sent: 1,
      rsvp_status: "Pending"
    }
  ],
  vendors: [
    {
      vendor_id: 1,
      name: "Floral Decor",
      service_type: "Decoration",
      phone: "9988776655",
      email: "decor@example.com",
      religion: "All",
      price: 5000.00,
      status: "Hired"
    }
  ],
  expenses: [
    {
      expense_id: 1,
      couple_id: 1,
      category: "Venue",
      amount: 2000.00,
      paid_by: "John",
      dates: "2025-09-01"
    }
  ],
  rituals: [
    {
      ritual_id: 1,
      religion: "Christian",
      ritual_name: "Exchange of Vows",
      description: "A heartfelt vow exchange during the ceremony.",
      importance_level: "Essential"
    }
  ]
};

const Card = ({ title, children }) => (
  <div className="bg-white shadow-xl rounded-2xl p-6 border border-pink-100 transition-transform hover:scale-[1.02] hover:shadow-2xl duration-300">
    <h2 className="text-3xl font-bold mb-4 text-pink-600 border-b pb-2 border-pink-200">{title}</h2>
    <div className="space-y-3 text-gray-700 text-[16px] leading-relaxed">{children}</div>
  </div>
);

const Booking = () => {
  return (
    <div className="grid gap-8 p-10 bg-gradient-to-br from-pink-100 to-pink-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-pink-700 mb-10">Wedding Dashboard</h1>

      <Card title="User Info">
        <p><strong>User ID:</strong> {sampleData.user.user_id}</p>
        <p><strong>Username:</strong> {sampleData.user.username}</p>
        <p><strong>Email:</strong> {sampleData.user.email}</p>
        <p><strong>Phone:</strong> {sampleData.user.phone}</p>
        <p><strong>Role:</strong> {sampleData.user.role}</p>
        <p><strong>Religion:</strong> {sampleData.user.religion}</p>
      </Card>

      <Card title="Couple Info">
        <p><strong>Couple ID:</strong> {sampleData.couple.couple_id}</p>
        <p><strong>Partner 1:</strong> {sampleData.couple.partner1_name}</p>
        <p><strong>Partner 2:</strong> {sampleData.couple.partner2_name}</p>
        <p><strong>Wedding Date:</strong> {sampleData.couple.wedding_date}</p>
        <p><strong>Religion:</strong> {sampleData.couple.religion}</p>
        <p><strong>Status:</strong> {sampleData.couple.status}</p>
      </Card>

      <Card title="Wedding Events">
        {sampleData.events.map(event => (
          <div key={event.event_id} className="bg-pink-50 rounded-lg p-3 shadow-sm border border-pink-100">
            <p><strong>{event.event_name}</strong> (ID: {event.event_id})</p>
            <p><strong>Date:</strong> {event.event_date}</p>
            <p><strong>Venue:</strong> {event.venue}</p>
            <p><strong>Description:</strong> {event.description}</p>
          </div>
        ))}
      </Card>

      <Card title="Guests">
        {sampleData.guests.map(guest => (
          <div key={guest.guest_id} className="bg-white border border-gray-100 rounded-md p-3 shadow-sm">
            <p><strong>Name:</strong> {guest.name} (ID: {guest.guest_id})</p>
            <p><strong>Email:</strong> {guest.email}</p>
            <p><strong>Phone:</strong> {guest.phone}</p>
            <p><strong>Invitation Sent:</strong> {guest.invitation_sent ? "Yes" : "No"}</p>
            <p><strong>RSVP Status:</strong> {guest.rsvp_status}</p>
          </div>
        ))}
      </Card>

      <Card title="Vendors">
        {sampleData.vendors.map(vendor => (
          <div key={vendor.vendor_id} className="bg-white border border-gray-100 rounded-md p-3 shadow-sm">
            <p><strong>Name:</strong> {vendor.name} (ID: {vendor.vendor_id})</p>
            <p><strong>Service Type:</strong> {vendor.service_type}</p>
            <p><strong>Phone:</strong> {vendor.phone}</p>
            <p><strong>Email:</strong> {vendor.email}</p>
            <p><strong>Religion:</strong> {vendor.religion}</p>
            <p><strong>Price:</strong> ${vendor.price}</p>
            <p><strong>Status:</strong> {vendor.status}</p>
          </div>
        ))}
      </Card>

      <Card title="Budget Expenses">
        {sampleData.expenses.map(expense => (
          <div key={expense.expense_id} className="bg-white border border-gray-100 rounded-md p-3 shadow-sm">
            <p><strong>Category:</strong> {expense.category} (ID: {expense.expense_id})</p>
            <p><strong>Amount:</strong> ${expense.amount}</p>
            <p><strong>Paid By:</strong> {expense.paid_by}</p>
            <p><strong>Date:</strong> {expense.dates}</p>
          </div>
        ))}
      </Card>

      <Card title="Rituals & Traditions">
        {sampleData.rituals.map(ritual => (
          <div key={ritual.ritual_id} className="bg-white border border-gray-100 rounded-md p-3 shadow-sm">
            <p><strong>Name:</strong> {ritual.ritual_name} (ID: {ritual.ritual_id})</p>
            <p><strong>Religion:</strong> {ritual.religion}</p>
            <p><strong>Description:</strong> {ritual.description}</p>
            <p><strong>Importance:</strong> {ritual.importance_level}</p>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default Booking;

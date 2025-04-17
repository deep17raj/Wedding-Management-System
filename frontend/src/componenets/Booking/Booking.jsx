import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Card = ({ title, children }) => (
  <div className="bg-white shadow-xl rounded-2xl p-6 border border-pink-100 transition-transform hover:scale-[1.02] hover:shadow-2xl duration-300">
    <h2 className="text-3xl font-bold mb-4 text-pink-600 border-b pb-2 border-pink-200">{title}</h2>
    <div className="space-y-3 text-gray-700 text-[16px] leading-relaxed">{children}</div>
  </div>
);

const Booking = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3001/data") // Replace with your backend URL if different
      .then((res) => res.json())
      .then((json) => {
        console.log("Received:", json);
        setData(json);  // Set the data to state
        console.log(json.userData)  // Set the data to state
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
    
  }, []);

  if (!data) return <div>Loading...</div>; // Display loading state

  return (
    <div className="grid gap-8 p-10 bg-gradient-to-br from-pink-100 to-pink-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-pink-700 mb-10">Wedding Dashboard</h1>

      <Card title="User Info">
        <p><strong>User ID:</strong> {data.userData.USER_ID}</p>
        <p><strong>Username:</strong> {data.userData.USERNAME}</p>
        <p><strong>Email:</strong> {data.userData.EMAIL}</p>
        <p><strong>Phone:</strong> {data.userData.PHONE}</p>
        <p><strong>Role:</strong> {data.userData.ROLE}</p>
        <p><strong>Religion:</strong> {data.userData.RELIGION}</p>
        {/* <button  className="btn bg-green-500 p-3 rounded-md  mt-4">Update</button>
        <button className="btn bg-red-500 p-3 rounded-md  mt-4 ml-2">Delete</button> */}
      </Card>

      <Card title="Couple Info">
        <p><strong>Couple ID:</strong> {data.coupleData.COUPLE_ID}</p>
        <p><strong>Partner 1:</strong> {data.coupleData.PARTNER1_NAME}</p>
        <p><strong>Partner 2:</strong> {data.coupleData.PARTNER2_NAME}</p>
        <p><strong>Wedding Date:</strong> {data.coupleData.WEDDING_DATE}</p>
        <p><strong>Religion:</strong> {data.coupleData.RELIGION}</p>
        <p><strong>Status:</strong> {data.coupleData.STATUS}</p>
        <button onClick={()=>{
          navigate("/coupledetail");
        }} className="btn bg-green-500 p-3 rounded-md  mt-4">Update</button>
        <button className="btn bg-red-500 p-3 rounded-md  mt-4 ml-2">Delete</button>
      </Card>

      <Card title="Wedding Events">
            <p><strong>{data.eventData.EVENT_NAME}</strong> (ID: {data.eventData.EVENT_ID})</p>
            <p><strong>Date:</strong> {data.eventData.EVENT_DATE}</p>
            <p><strong>Venue:</strong> {data.eventData.VENUE}</p>
            <p><strong>Description:</strong> {data.eventData.DESCRIPTION}</p>
            <button onClick={()=>{
          navigate("/eventdetail");
        }} className="btn bg-green-500 p-3 rounded-md  mt-4">Update</button>
        <button className="btn bg-red-500 p-3 rounded-md  mt-4 ml-2">Delete</button>
      </Card>

      <Card title="Guests">
            <p><strong>Name:</strong> {data.guestData.NAME} (ID: {data.guestData.GUEST_ID})</p>
            <p><strong>Email:</strong> {data.guestData.EMAIL}</p>
            <p><strong>Phone:</strong> {data.guestData.PHONE}</p>
            <p><strong>Invitation Sent:</strong> {data.guestData.INVITATION_SENT ? "Yes" : "No"}</p>
            <p><strong>RSVP Status:</strong> {data.guestData.RSVP_STATUS}</p>
            <button onClick={()=>{
          navigate("/guestdetail");
        }} className="btn bg-green-500 p-3 rounded-md  mt-4">Update</button>
        <button className="btn bg-red-500 p-3 rounded-md  mt-4 ml-2">Delete</button>
      </Card>

      <Card title="Vendors">
        
            <p><strong>Name:</strong> {data.vendorData.NAME} (ID: {data.vendorData.VENDOR_ID})</p>
            <p><strong>Service Type:</strong> {data.vendorData.SERVICE_TYPE}</p>
            <p><strong>Phone:</strong> {data.vendorData.PHONE}</p>
            <p><strong>Email:</strong> {data.vendorData.EMAIL}</p>
            <p><strong>Religion:</strong> {data.vendorData.RELIGION}</p>
            <p><strong>Price:</strong> ${data.vendorData.PRICE}</p>
            <p><strong>Status:</strong> {data.vendorData.STATUS}</p>
            <button onClick={()=>{
          navigate("/vendordetail");
        }} className="btn bg-green-500 p-3 rounded-md  mt-4">Update</button>
        <button className="btn bg-red-500 p-3 rounded-md  mt-4 ml-2">Delete</button>
      </Card>

      <Card title="Budget Expenses">
            <p><strong>Category:</strong> {data.expenseData.CATEGORY} (ID: {data.expenseData.EXPENSE_ID})</p>
            <p><strong>Amount:</strong> ${data.expenseData.AMOUNT}</p>
            <p><strong>Paid By:</strong> {data.expenseData.PAID_BY}</p>
            <p><strong>Date:</strong> {data.expenseData.DATES}</p>
            <button onClick={()=>{
          navigate("/budgetdetail");
        }} className="btn bg-green-500 p-3 rounded-md  mt-4">Update</button>
        <button className="btn bg-red-500 p-3 rounded-md  mt-4 ml-2">Delete</button>
      </Card>

      <Card title="Rituals & Traditions">
        
            <p><strong>Name:</strong> {data.ritualData.RITUAL_NAME} (ID: {data.ritualData.RITUAL_ID})</p>
            <p><strong>Religion:</strong> {data.ritualData.RELIGION}</p>
            <p><strong>Description:</strong> {data.ritualData.DESCRIPTION}</p>
            <p><strong>Importance:</strong> {data.ritualData.IMPORTANCE_LEVEL}</p>
            <button onClick={()=>{
          navigate("/ritualdetail");
        }} className="btn bg-green-500 p-3 rounded-md  mt-4">Update</button>
        <button className="btn bg-red-500 p-3 rounded-md  mt-4 ml-2">Delete</button>
      </Card>
    </div>
  );
};

export default Booking;

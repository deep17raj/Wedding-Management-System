import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './componenets/auth/signup'
import Navbar from './componenets/Navbar/Navbar'
import HomePage from './componenets/HomePage.jsx/HomePage'
import Service from './componenets/Service/Service';
import CoupleDetails from './componenets/Details/CoupleDetail';
import WeddingEventForm from './componenets/Details/WeddingEventForm';
import GuestForm from './componenets/Details/GuestForm';
import VendorForm from './componenets/Details/VendorForm';
import BudgetExpenseForm from './componenets/Details/BudgetExpenseForm ';
import RitualsForm from './componenets/Details/RitualsForm';
import Booking from './componenets/Booking/Booking'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/service",
      element: <Service />,
    },
    {
      path: "/coupledetail",
      element: <CoupleDetails />,
    },
    {
      path: "/eventdetail",
      element: <WeddingEventForm />,
    },
    {
      path: "/guestdetail",
      element: <GuestForm />,
    },
    {
      path: "/venderdetail",
      element: <VendorForm />,
    },
    {
      path: "/budgetdetail",
      element: <BudgetExpenseForm />,
    },
    {
      path: "/ritualdetail",
      element: <RitualsForm />,
    },
    
    {
      path: "/booking",
      element: <Booking />,
    },
  ]);
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;


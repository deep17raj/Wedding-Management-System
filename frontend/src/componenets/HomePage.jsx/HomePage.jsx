import React from "react";
import Navbar from "../Navbar/Navbar";
import hero from "../../assets/hero.jpeg";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const onClick = ()=>{
    navigate("/service")
  }
  return (
    <div>
      <Navbar />
      <div
        style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)),url(${hero})`,minHeight:"80vh" }}
        className="relative bg-cover bg-center  w-full   "
      >
        <div className="inset-0 bg-gradient-to-t from-black/70 to-transparent">
          <div className="absolute top-52 left-60  ">
            <h2 className="text-white text-6xl font-bold">Let's get Wed</h2>
            <p className="text-white text-2xl font-semibold mt-4">Your dream wedding awaits!</p>
            <button onClick={onClick} className="btn bg-green-500 p-3 rounded-md  mt-4">
              <p className="text-white text-xl font-medium">View Services</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

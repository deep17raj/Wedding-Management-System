import React from "react";
import Navbar from "../Navbar/Navbar";
import card1 from "../../assets/card1.jpeg";
import card2 from "../../assets/card2.jpeg";
import card3 from "../../assets/card3.jpeg";

function Service() {
  return (
    <>
      <Navbar />
      <div className="flex justify-evenly">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={card1} alt="abc" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Comprehensive wedding planning
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Transform your wedding dreams into reality with structured
              planning.
            </p>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={card2} alt="abc" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Vendor coordination
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Effortlessly connect with top-notch wedding vendors.
            </p>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={card3} alt="abc" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Day-of coordination
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Ensure a flawless execution of your wedding day.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;

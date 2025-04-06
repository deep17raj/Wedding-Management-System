import React from 'react'

function Navbar() {
  return (
    <div className=' px-8 py-5 w-full h-full'>
        <nav className="flex  justify-between items-center  ">
        <div className="text-[#552734] text-[25px] font-medium">
          <a href="/">Let's Get Wed</a>
        </div>
        <div className="flex gap-8 mb-5">
          <div className="text-[#552734] text-[20px]"><a href="/">Home</a></div>
          <div className="text-[#552734] text-[20px]"><a href="/about">About</a></div>
          <div className="text-[#552734] text-[20px]"><a href="/service">Service</a></div>
          <div
            className="text-[#552734] text-[25px] border border-[#552734] px-2 "
            style={{ borderRadius: "15px" }}
          >
           <a href="/contact">Contact</a> 
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
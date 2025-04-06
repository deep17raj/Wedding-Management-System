import React from 'react'
import Navbar from '../Navbar/Navbar'
import hero from '../../assets/hero.jpeg'

function HomePage() {
  return (
    <div>
    <Navbar/>
    <div style={{ backgroundImage: `url(${hero})` }} className="bg-cover bg-center h-screen w-full ">
        <div className='' >
            <h2>Let's get Wed</h2>
            <p>Your dream wedding awaits!</p>
            <button>view services</button>
        </div>
    </div>
    </div>
  )
}

export default HomePage
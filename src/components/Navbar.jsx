import React from 'react'
import Earth from "../images/Earth.png"

const Navbar = () => {
  return (
      <nav>
      <div className="box-border h-20 bg-red-500 flex place-items-center justify-center" >
        <img className="w-6 h-6 rounded-2xl"src={Earth} />
        <h1 className="text-white font-serif" >
        my travel journal
        </h1>
        </div>
    </nav>
  )
}

export default Navbar
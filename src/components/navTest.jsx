import React from "react";
import logo from "../assets/logo.png"; 

const Navbar = ({ totalItems, toggleCartDrawer }) => {
  return (
    <nav className="bg-sky-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Fisk logga */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 mr-2" />
          <div className="text-stone-700 text-3xl font-bold font-logoFont">KAPP'N'S CATCH</div>
        </div>
        <button className="relative" onClick={toggleCartDrawer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-stone-700"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span className="absolute top-3 left-5 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 bg-opacity-90 rounded-full">
            {totalItems}
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

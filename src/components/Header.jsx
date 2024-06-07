// Header.jsx

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between py-6 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">
            <img src="/Logo_placeholder.svg" alt="Logo" className="h-10" />
          </Link>
        </div>

        {/* Menu Items */}
        <nav className="space-x-4">
          <Link to="/" className="hover:text-gray-400 p-4">
            Home
          </Link>
          <Link to="/products" className="hover:text-gray-400 p-4">
            Products
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 p-4">
          {/* Search Icon */}
          <Link to="/search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m1.85-2.15a7.5 7.5 0 111.414-1.414A7.5 7.5 0 0118.5 18.5z"
              />
            </svg>
          </Link>
          {/* Cart Icon */}
          <Link to="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8M7 13L5.4 5H19m-9 14a2 2 0 110-4 2 2 0 010 4zm6 0a2 2 0 110-4 2 2 0 010 4z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

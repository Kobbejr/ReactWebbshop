// Header.jsx

import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import SearchIcon from "./SearchIcon";

const Header = () => {
  return (
    <header className="w-full bg-white text-white">
      <div className="container mx-auto flex items-center justify-between py-6 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">
            <img src="/KappnsCatch-logotype.svg" alt="Logo" className="h-20" />
          </Link>
        </div>

        {/* Menu Items */}
        <nav className="space-x-4">
          <Link to="/" className="text-gray-600 hover:text-teal-700 p-4">
            Home
          </Link>
          <Link
            to="/products"
            className="text-gray-600 hover:text-teal-700 p-4"
          >
            Products
          </Link>
        </nav>

        {/* Icons */}
        <div className="text-gray-600 flex items-center space-x-4 p-4">
          {/* Search Icon */}
          <Link to="/search">
            <SearchIcon></SearchIcon>
          </Link>
          {/* Cart Icon */}
          <Link to="/cart">
            <CartIcon></CartIcon>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

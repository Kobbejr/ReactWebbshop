import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CartIcon from "./MenuCartIcon";
import MenuIcon from "./MenuMenuIcon";
import CrossIcon from "./MenuCrossIcon";
import CartDrawer from "./ShoppingFlow/CartDrawer";
import { useShoppingCart } from "./context/CartContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // State for cart drawer
  const location = useLocation();
  const currentPath = location.pathname;
  const {
    cart = {},
    products,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
  } = useShoppingCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCartDrawer = () => {
    setIsCartOpen(!isCartOpen);
  };

  const getTotalItems = () => {
    if (!cart) return 0; // Ensure cart is defined
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  };

  return (
    <header className="w-full bg-white text-gray-600">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">
            <img
              src="/KappnsCatch-logotype.svg"
              alt="Logo"
              className="hidden md:block lg:hidden h-20"
            />
            <img
              src="/KappnsCatch-logotype-mobile.svg"
              alt="Mobile Logo"
              className="block md:hidden h-12"
            />
            <img
              src="/KappnsCatch-logotype.svg"
              alt="Logo"
              className="hidden lg:block h-20"
            />
          </Link>
        </div>

        {/* Menu Items */}
        <nav className="hidden lg:flex space-x-4">
          <Link
            to="/"
            className={`text-gray-600 hover:text-teal-700 p-2 ${
              currentPath === "/" ? "font-bold" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={`text-gray-600 hover:text-teal-700 p-2 ${
              currentPath === "/products" ? "font-bold" : ""
            }`}
          >
            Products
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 relative">
          <button onClick={toggleCartDrawer} className="relative">
            <CartIcon />
            {getTotalItems() > 0 && (
              <div className="absolute -top-2 -right-2 bg-teal-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {getTotalItems()}
              </div>
            )}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            className="text-gray-600 hover:text-teal-700 focus:outline-none transition ease-in-out duration-300"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <CrossIcon className="w-8 h-8 transition-all duration-300" />
            ) : (
              <MenuIcon className="w-8 h-8 transition-all duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`absolute top-16 right-6 lg:hidden z-50 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <nav className="space-y-1 px-2 w-48 pb-3 pt-2 bg-gray-200 z-50 shadow-lg rounded-lg">
          <Link
            to="/"
            className={`block text-gray-600 hover:text-teal-700 p-2 ${
              currentPath === "/" ? "font-bold" : ""
            }`}
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={`block text-gray-600 hover:text-teal-700 p-2 ${
              currentPath === "/products" ? "font-bold" : ""
            }`}
            onClick={toggleMenu}
          >
            Products
          </Link>
        </nav>
      </div>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        closeDrawer={toggleCartDrawer}
        cart={cart}
        products={products}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        removeFromCart={removeFromCart}
        goToCheckout={() => console.log("Go to checkout")}
        totalItems={getTotalItems()} // Pass total items count to CartDrawer
      />
    </header>
  );
};

export default Header;

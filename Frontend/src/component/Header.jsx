import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingBasket, Truck, User, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../public/Logo/parasmanilogo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <>
      <div className="bg-gray-100 sticky top-0 z-50 p-6">
        <header className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl">
          <div className="flex justify-between items-center p-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center group">
                <img 
                  src={Logo} 
                  alt="Parshmani Agritech Logo" 
                  className="w-14 h-12 mr-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  loading="lazy"
                />
                <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
                  <span className="text-yellow-300 transition-colors duration-300 group-hover:text-yellow-400">Parshmani</span> Agritech
                </h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex flex-1 justify-center">
              <ul className="flex gap-8 text-white">
                {[
                  { to: "/", text: "New Drops 🔥", title: "Latest Agricultural Products" },
                  { to: "/power-weeder", text: "Power Weeder", title: "Power Weeder Equipment" },
                  { to: "/manual-framing-tools", text: "Manual Tools", title: "Manual Farming Tools" },
                ].map((item) => (
                  <li key={item.to}>
                    <Link 
                      to={item.to}
                      className="relative text-sm font-medium uppercase tracking-wide hover:text-yellow-300 transition-colors duration-200 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-yellow-300 after:bottom-[-8px] after:left-0 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
                      title={item.title}
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop Icons */}
            <div className="hidden lg:flex items-center gap-6">
              <Link to="/search" className="text-white hover:text-yellow-300 transition-all duration-200" title="Search Products">
                <Search className="w-6 h-6 hover:scale-110 transition-transform duration-200" />
              </Link>
              <Link 
                to="/profile" 
                className="text-white hover:text-yellow-300 transition-all duration-200" 
                title="Your Profile"
              >
                <User className="w-6 h-6 hover:scale-110 transition-transform duration-200" />
              </Link>
              <Link to="/cart" className="text-white hover:text-yellow-300 transition-all duration-200" title="View Cart">
                <Truck className="w-6 h-6 hover:scale-110 transition-transform duration-200" />
              </Link>
            </div>

            {/* Hamburger Button */}
            <button 
              className="lg:hidden text-white focus:outline-none z-50"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-7 h-7 transition-transform duration-300 rotate-180" />
              ) : (
                <Menu className="w-7 h-7 transition-transform duration-300" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div 
            className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
              isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <nav className="bg-green-700/95 backdrop-blur-md p-6 rounded-b-2xl">
              <ul className="flex flex-col gap-6 text-white">
                {[
                  { to: "/", text: "New Drops 🔥", title: "Latest Agricultural Products" },
                  { to: "/power-weeder", text: "Power Weeder", title: "Power Weeder Equipment" },
                  { to: "/manual-framing-tools", text: "Manual Tools", title: "Manual Farming Tools" },
                  { to: "/search", text: "Search", icon: Search, title: "Search Products" },
                  { to: "/profile", text: "Profile", icon: User, title: "Your Profile" },
                  { to: "/cart", text: "Cart", icon: Truck, title: "View Cart" },
                ].map((item) => (
                  <li key={item.to}>
                    <Link 
                      to={item.to}
                      className="flex items-center gap-3 text-lg font-medium hover:text-yellow-300 transition-all duration-200 group"
                      title={item.title}
                      onClick={(e) => {
                        if (item.onClick) item.onClick(e);
                        else setIsMenuOpen(false);
                      }}
                    >
                      {item.icon && (
                        <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                      )}
                      <span>{item.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
      </div>

     
    </>
  );
};

export default Header;
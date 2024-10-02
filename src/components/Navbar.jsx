import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-white bg-opacity-50 backdrop-blur-md z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-black font-bold text-xl">
          {/* Logo o título aquí */}
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 justify-center w-full">
          <Link to="/" className="text-black hover:text-gray-700">Main</Link>
          <Link to="/destinations" className="text-black hover:text-gray-700">Destinations</Link>
          <Link to="/food" className="text-black hover:text-gray-700">Food & Drink</Link>
          <Link to="/things" className="text-black hover:text-gray-700">Things to Do</Link>
          <Link to="/plans" className="text-black hover:text-gray-700">Plan your trip</Link>
        </div>
        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white bg-opacity-90 backdrop-blur-md text-black space-y-4 py-4">
          <Link to="/" className="block text-center" onClick={toggleMenu}>Main</Link>
          <Link to="/destinations" className="block text-center" onClick={toggleMenu}>Destinations</Link>
          <Link to="/food" className="block text-center" onClick={toggleMenu}>Food & Drink</Link>
          <Link to="/things" className="block text-center" onClick={toggleMenu}>Things to Do</Link>
          <Link to="/plans" className="block text-center" onClick={toggleMenu}>Plan your trip</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
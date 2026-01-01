"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import GradientButton from './GradientButton';

const Header = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shoes", path: "/category/shoes" },
    { name: "Hoodies/Sweaters", path: "/category/hoodies-sweaters" },
    { name: "T-Shirts", path: "/category/t-shirts" },
    { name: "Jackets", path: "/category/jackets" },
    { name: "Pants/Shorts", path: "/category/pants-shorts" },
    { name: "Headwear", path: "/category/headwear" },
    { name: "Accessories", path: "/category/accessories" },
    { name: "Other Stuff", path: "/category/other-stuff" },
  ];

  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-4 bg-background text-foreground border-b border-gray-800">
      <div className="font-orbitron text-2xl md:text-3xl font-semibold mb-4 md:mb-0 text-transparent bg-clip-text bg-gradient-to-r from-white to-red-600 text-glow">
        <Link to="/">
          Kakosheets
        </Link>
      </div>
      <nav className="flex-grow flex flex-wrap justify-center gap-2 md:gap-4 mb-4 md:mb-0">
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            to={link.path} 
            className="text-gray-700 hover:text-red-400 transition-colors text-base border border-border rounded-md px-3 py-1"
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <div className="flex space-x-4">
        <GradientButton asChild>
          <Link to="/login">Login</Link>
        </GradientButton>
      </div>
    </header>
  );
};

export default Header;
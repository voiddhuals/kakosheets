"use client";

import React from 'react';
import { Link } from 'react-router-dom';

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
    <header className="flex justify-between items-center p-4 border-b border-gray-200 bg-white text-sm">
      <div className="font-bold text-lg">ACBuySheets</div>
      <nav className="flex space-x-4">
        {navLinks.map((link) => (
          <Link key={link.name} to={link.path} className="hover:underline">
            {link.name}
          </Link>
        ))}
        <Link to="/signup" className="hover:underline">Sign up to ACBuy</Link>
        <Link to="/report-dead-link" className="hover:underline">Report Dead Link</Link>
      </nav>
    </header>
  );
};

export default Header;
"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import GradientButton from './GradientButton';
import MobileNav from './MobileNav'; // Importujemy nowy komponent

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
    <header className="flex justify-between items-center p-4 bg-background text-foreground border-b border-border shadow-sm">
      <div className="flex items-center gap-4">
        <MobileNav /> {/* Nawigacja mobilna */}
        <div className="font-orbitron text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-red-600 text-glow">
          <Link to="/">
            Kakosheets
          </Link>
        </div>
      </div>
      <nav className="hidden md:flex flex-wrap justify-center gap-2 md:gap-4">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-muted-foreground hover:text-primary transition-colors text-base border border-border rounded-sm px-3 py-1 transition-all duration-200 hover:scale-105 hover:border-red-500"
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <div className="hidden md:flex space-x-4">
        <GradientButton asChild>
          <Link to="/login">Login</Link>
        </GradientButton>
      </div>
    </header>
  );
};

export default Header;
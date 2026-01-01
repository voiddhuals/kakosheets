"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import GradientButton from './GradientButton';
import MobileNav from './MobileNav';
import LanguageToggle from './LanguageToggle';
import { useTranslation } from '@/hooks/useTranslation';
import { Home, Footprints, Shirt, Coat, Trousers, Hat, Gem, Package, LogIn } from 'lucide-react'; // Importowanie ikonek

const Header = () => {
  const { t } = useTranslation();

  const navLinks = [
    { name: t("home"), path: "/", icon: Home },
    { name: t("shoes"), path: "/category/shoes", icon: Footprints },
    { name: t("hoodiesSweaters"), path: "/category/hoodies-sweaters", icon: Shirt },
    { name: t("tShirts"), path: "/category/t-shirts", icon: Shirt }, // Używamy Shirt dla T-shirtów
    { name: t("jackets"), path: "/category/jackets", icon: Coat },
    { name: t("pantsShorts"), path: "/category/pants-shorts", icon: Trousers },
    { name: t("headwear"), path: "/category/headwear", icon: Hat },
    { name: t("accessories"), path: "/category/accessories", icon: Gem },
    { name: t("otherStuff"), path: "/category/other-stuff", icon: Package },
  ];

  return (
    <header className="flex justify-between items-center p-4 bg-background text-foreground border-b border-border shadow-sm">
      <div className="flex items-center gap-4">
        <MobileNav />
        <div className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-black">
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
            className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors text-base px-3 py-1 transition-all duration-200 hover:scale-105"
          >
            <link.icon className="h-4 w-4" /> {/* Renderowanie ikonki */}
            {link.name}
          </Link>
        ))}
      </nav>
      <div className="hidden md:flex space-x-4 items-center">
        <LanguageToggle />
        <GradientButton asChild>
          <Link to="/login" className="flex items-center gap-1">
            <LogIn className="h-4 w-4" /> {/* Ikonka dla Logowania */}
            {t("login")}
          </Link>
        </GradientButton>
      </div>
    </header>
  );
};

export default Header;